import Image from "next/image";
import Marquee from "./Marquee";
import { STORY_IMAGES } from "@/lib/reviews";

// Sélection étalée dans la collection de stories repostées.
const picks = STORY_IMAGES.filter((_, i) => i % 3 === 0).slice(0, 18);

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
