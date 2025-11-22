import GithubCard from '../components/GithubCard'
import LeetcodeCard from '../components/LeetcodeCard'
export default function Dashboard(){ return (<div style={{padding:24}}><h1>Dashboard</h1><div style={{display:'grid',gridTemplateColumns:'1fr 1fr 360px',gap:16}}><GithubCard username='octocat'/><LeetcodeCard username='leet_demo'/><div>Right column</div></div></div>) }
