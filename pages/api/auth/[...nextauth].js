import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export default NextAuth({
  providers: [
    GithubProvider({ clientId: process.env.GITHUB_OAUTH_ID, clientSecret: process.env.GITHUB_OAUTH_SECRET }),
    // CredentialsProvider can be implemented to use your DB (Prisma) for email/password
    CredentialsProvider({
      name: 'Credentials',
      credentials: { email: { label: 'Email', type: 'text' }, password: { label: 'Password', type: 'password' } },
      async authorize(credentials, req) {
        // Implement lookup with backend API or directly with Prisma in frontend? Recommend backend route for security.
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
          method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(credentials)
        })
        const user = await res.json()
        if (user && user.id) return user
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/auth/signin' }
})
