import { Book, ListTodo } from "lucide-react"
import { Logo } from "./components/Logo"
import { PopularEvents } from "./components/PopularEvents"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4 my-4 grid gap-5">
      <div className="grid gap-3">
        <Logo />
        <h1 className="text-2xl">Welcome to the TicketSwap challenger™</h1>

        <p>
          The goal of this challenger is to finish the todo list stated below ✅
          Of course if you see anything that can be improved that is not on the
          todo list, you are welcome to do so 😊
        </p>
      </div>

      <div className="h-[1px] bg-slate-900 bg-opacity-5" />

      <div className="grid gap-3">
        <h2 className="text-xl flex items-center gap-2">
          <ListTodo /> Todo
        </h2>

        <ul>
          <li>
            <strong>Improvement:</strong> The Challenger should be mobile
            friendly
          </li>
          <li>
            <strong>Bugfix:</strong> There are some browser console errors that
            need to be addressed
          </li>
          <li>
            <strong>Improvement:</strong> The event page need some nice styling
            for a better overview of all the information
          </li>
          <li>
            <strong>Improvement:</strong> The popular events on this page are
            not server side rendered, it would be nice to have that fixed
          </li>
          <li>
            <strong>Bugfix:</strong> There are some issues in dark mode that
            need to be addressed
          </li>
          <li>
            <strong>Story:</strong> As a user I want to be able to navigate to a
            search page and search all the events. I want to see the results and
            be able to navigate to an event.
          </li>
        </ul>
      </div>

      <div className="h-[1px] bg-slate-900 bg-opacity-5" />

      <div className="grid gap-3">
        <h2 className="text-xl flex items-center gap-2">
          <Book /> References
        </h2>

        <p className="text-secondary text-sm">
          <strong>Tip:</strong> Below is a list of references you can use to get
          started if you have little experience with the tech stack. If you have
          any question you can always{" "}
          <a
            className="text-primary underline underline-offset-2"
            href="mailto:rob@ticketswap.com"
          >
            contact us
          </a>{" "}
          💪
        </p>

        <ul className="list-disc px-4">
          <li>
            The{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="https://react.dev/"
            >
              React
            </a>{" "}
            framework we use for this challenger is{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="https://nextjs.org/docs"
            >
              Next.js
            </a>
          </li>
          <li>
            For CSS we use{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="https://tailwindcss.com/docs/installation"
            >
              Tailwind CSS
            </a>
          </li>
          <li>
            For icons we use{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="https://lucide.dev"
            >
              Lucide
            </a>
          </li>
          <li>
            We have mocked the database and the data, so check out the{" "}
            <span className="font-mono bg-slate-100 text-xs p-1 rounded">
              /src/lib
            </span>{" "}
            folder. The{" "}
            <span className="font-mono bg-slate-100 text-xs p-1 rounded">
              mock-data.ts
            </span>{" "}
            doesn't need to be updated perse, but the{" "}
            <span className="font-mono bg-slate-100 text-xs p-1 rounded">
              mock-db.ts
            </span>{" "}
            needs some new extensions.
          </li>
        </ul>
      </div>

      <div className="h-[1px] bg-slate-900 bg-opacity-5" />

      <PopularEvents />

      <article className="mt-4 grid justify-center">
        <a href="https://ticketswap.com">
          <Logo />
        </a>
      </article>
    </main>
  )
}
