import Image from "next/image";
import Marquee from "./Marquee";

// Sélection CURÉE de stories repostées (vérifiées visuellement) : on privilégie
// les visuels lumineux/appétissants et on écarte les captures sombres/floues.
const CURATED = [1, 8, 5, 20, 10, 28, 34, 11, 4, 31, 16, 13, 22, 19, 2, 25];
const picks = CURATED.map((n) => `/reviews/story_${String(n).padStart(2, "0")}.jpg`);

export default function StoriesStrip() {
  const cards = picks.map((src, i) => (
    <span
      key={src}
      className="relative block h-[300px] w-[172px] shrink-0 overflow-hidden rounded-2xl border-4 border-paper shadow-card"
      style={{ transform: `rotate(${i % 2 ? 1.4 : -1.4}deg)` }}
    >
      <Image
        src={src}
        alt="Repost d'une story client Benti sur Instagram"
        fill
        sizes="172px"
        className="object-cover"
        loading="lazy"
      />
    </span>
  ));

  return (
    <Marquee
      items={cards}
      duration={70}
      pausable
      separator={<span aria-hidden className="px-2" />}
    />
  );
}
