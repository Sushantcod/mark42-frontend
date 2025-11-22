export default function Leaderboard({items=[]}){ return (<div><h4>Leaderboard</h4><ol>{items.map((it,i)=>(<li key={i}>{it.name} — {it.score}</li>))}</ol></div>) }
