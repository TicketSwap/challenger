import { database } from "@/lib/mock-db"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const amount = Number(searchParams.get("amount")) ?? 5
  const offset = Number(searchParams.get("offset")) ?? 0

  return Response.json({
    events: await database.getPopularEvents(amount, offset),
  })
}
