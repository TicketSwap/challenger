import { Logo } from "@/app/components/Logo"
import { database } from "@/lib/mock-db"
import { AlertCircle, Bell } from "lucide-react"
import Image from "next/image"

export default async function Home({ params }) {
  const event = await database.getEvent(Number(params.id))

  if (!event) return null

  return (
    <main className="max-w-3xl mx-auto p-4 my-4 grid gap-5">
      <div className="grid gap-3">
        <Logo />
        <Image
          className="rounded"
          src={event.imageUrl}
          alt=""
          width={320}
          height={200}
        />
        <h1 className="text-2xl">{event.name}</h1>
        <h3>
          {event.location} - {new Date(event.date).toLocaleDateString()}
        </h3>
        <p className="rounded bg-secondary text-secondary-foreground p-4">
          {event.description}
        </p>

        <p>
          <Bell className="inline-block" /> {event.alerts} peope are searching
          for a ticket
        </p>
      </div>

      <article className="mt-4 grid justify-center">
        <a href="https://ticketswap.com">
          <Logo />
        </a>
      </article>
    </main>
  )
}
