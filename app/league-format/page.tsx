import LeagueInfo from "@/components/LeagueInfo";
import EventTimeline from "@/components/EventTimeline";
import GamesGrid from "@/components/GamesGrid";

export default function LeagueFormatPage() {
  return (
    <div className="pt-32 pb-8">
      <div className="text-center px-6 mb-4">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-3">
          League &amp; Championship Format
        </h1>
        <p className="text-ink/60 max-w-2xl mx-auto">
          What Meeple Masters is, how the league runs, and how the championship
          rounds decide the winners.
        </p>
      </div>

      {/* Basic gist of the league */}
      <LeagueInfo />

      {/* Highlight events */}
      <EventTimeline />

      {/* Games included */}
      <GamesGrid />

      {/* League format */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <div className="bg-forest/5 rounded-xl3 p-8 md:p-10 mb-8">
          <h2 className="font-heading text-3xl font-semibold mb-4">League Format</h2>
          <p className="text-ink/70 mb-4">
            The league stage runs as a round-robin across all game categories. Every
            player is guaranteed multiple matches, earning points for each result:
          </p>
          <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside">
            <li>Win = 3 points, Draw = 1 point, Loss = 0 points</li>
            <li>Standings are ranked by total points, then head-to-head record</li>
            <li>The top 8 players from the league stage advance to knockouts</li>
          </ul>
        </div>

        {/* Championship format */}
        <div className="bg-cherry/5 rounded-xl3 p-8 md:p-10">
          <h2 className="font-heading text-3xl font-semibold mb-4">Championship Format</h2>
          <p className="text-ink/70 mb-4">
            Once the top 8 are set, the championship moves to single-elimination
            knockouts:
          </p>
          <ul className="text-sm text-ink/70 space-y-2 list-disc list-inside">
            <li>Quarterfinals: top 8 players, single elimination</li>
            <li>Semi finals: final 4 players compete for a spot in the grand final</li>
            <li>Grand final: one table, one match, one national champion</li>
          </ul>
        </div>
      </section>
    </div>
  );
}