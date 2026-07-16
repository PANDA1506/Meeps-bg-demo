import Link from "next/link";
import { notFound } from "next/navigation";
import games from "@/data/games.json";

export function generateStaticParams() {
  return games.map((g) => ({ id: g.id }));
}

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 pb-20">
      <Link href="/#league-info" className="text-sm text-ink/50 hover:text-cherry mb-8 inline-block">
        ← Back to Games
      </Link>

      <div className="bg-white rounded-xl3 shadow-soft p-8 md:p-12">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          {game.category}
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-6">
          {game.name}
        </h1>

        <p className="text-ink/70 mb-10">{game.description}</p>

        {/* Placeholder content — replace with real details later */}
        <div className="border-2 border-dashed border-ink/15 rounded-xl2 p-8 text-center text-ink/40">
          <p className="font-semibold mb-2">Game details coming soon</p>
          <p className="text-sm">
            Player count, rules overview, match format, table numbers and photos
            for {game.name} will go here.
          </p>
        </div>
      </div>
    </div>
  );
}