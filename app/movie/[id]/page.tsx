import Link from "next/link";
import { getMovieById } from "../../../lib/movies";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: PageProps) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-8">
        <h1 className="text-3xl font-bold">Movie not found</h1>
        <p className="text-gray-400 mt-2">No movie exists with ID: {id}</p>
        <Link href="/" className="inline-block mt-6 text-sm underline">
          Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <Link href="/" className="text-sm underline text-gray-300">
        ← Back
      </Link>

      <div className="mt-6 grid gap-6 md:grid-cols-[260px_1fr] items-start">
        <div className="bg-zinc-900 rounded-lg overflow-hidden">
          <div className="aspect-[2/3] bg-zinc-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 mt-2">{movie.tags.join(" • ")}</p>

          <div className="mt-6 bg-zinc-900 rounded-lg p-4">
            <p className="text-sm text-gray-400">Placeholders for later:</p>
            <ul className="mt-2 text-sm list-disc list-inside text-gray-200">
              <li>Rihaan rating</li>
              <li>GF rating</li>
              <li>Notes / review</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
