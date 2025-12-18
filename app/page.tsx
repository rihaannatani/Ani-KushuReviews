import Link from "next/link";
import { movies } from "../lib/movies";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Ani-KushReviews</h1>
        <p className="text-gray-400">Pick a movie or show.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Your List</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((m) => (
            <Link
              key={m.id}
              href={`/movie/${m.id}`}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition"
            >
              <div className="aspect-[2/3] bg-zinc-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.imageUrl}
                  alt={m.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <h3 className="text-sm font-semibold">{m.title}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  {m.tags.join(" • ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
