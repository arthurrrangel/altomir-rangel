import { NextResponse } from "next/server"

const CHANNEL_ID = "UCkusTtkV-Az8T3tGDqwhMVQ"
export const revalidate = 1800

type VideoItem = { id: string; title: string; category: string }

function classifyCategory(t: string): string {
  const u = t.toUpperCase()
  if (u.includes("AO VIVO") || u.includes("LIVE")) return "Ao Vivo"
  if (u.includes("PROFE") || u.includes("FIM")) return "Profecia"
  if (u.includes("BIBLIA") || u.includes("PALAVRA")) return "Ensinamento"
  return "Novo"
}

function dec(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")}

export async function GET() {
  try {
    const res = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=" + CHANNEL_ID, { next: { revalidate: 1800 }, headers: { "User-Agent": "Mozilla/5.0" } })
    if (!res.ok) throw new Error("RSS failed")
    const xml = await res.text()
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    const videos: VideoItem[] = entries.slice(0, 9).map(m => {
      const e = m[1]
      const id = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? ""
      const title = dec(e.match(/<title>([^<]+)<\/title>/)?.[1] ?? "")
      return { id, title, category: classifyCategory(title) }
    }).filter(v => v.id && v.title)
    if (!videos.length) throw new Error("No videos")
    return NextResponse.json({ videos, updatedAt: new Date().toISOString() }, { headers: { "Cache-Control": "s-maxage=1800" } })
  } catch (err) {
    return NextResponse.json({ videos: [] }, { status: 500 })
  }
}
