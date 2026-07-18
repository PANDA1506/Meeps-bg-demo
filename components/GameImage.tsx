"use client";

import { useState } from "react";

const fallbackTint: Record<string, string> = {
  forest: "bg-forest-light/25 text-forest-dark",
  cherry: "bg-cherry-light/25 text-cherry-dark",
  sky: "bg-sky-light/35 text-sky-dark",
  gold: "bg-gold-light/40 text-ink",
  tangerine: "bg-tangerine-light/25 text-tangerine-dark",
};

export default function GameImage({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`w-full aspect-video rounded-xl2 flex items-center justify-center text-5xl ${fallbackTint[color]}`}
      >
        🎲
      </div>
    );
  }

  return (
    // Plain <img> on purpose — these are local files you'll drop into /public/games/
    // and may not exist yet, so we want a simple onError fallback rather than
    // Next's image optimizer treating a missing file as a hard error.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-full aspect-video object-cover rounded-xl2"
    />
  );
}
