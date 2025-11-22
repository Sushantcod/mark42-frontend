export function apiUrl(path){ return `${process.env.NEXT_PUBLIC_API_URL}${path}` }
export async function fetchJson(path, opts={}){ const r = await fetch(apiUrl(path), opts); return r.json(); }
