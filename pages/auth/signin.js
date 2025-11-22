import { getProviders, signIn } from 'next-auth/react'
export default function SignIn({ providers }){
  return (<div style={{padding:24}}><h1>Sign in</h1><div style={{display:'flex',gap:8}}>{Object.values(providers||{}).map(p=>(<button key={p.name} onClick={()=>signIn(p.id)}>{p.name}</button>))}</div></div>)
}
export async function getServerSideProps(){ const providers = await getProviders(); return { props:{ providers } } }
