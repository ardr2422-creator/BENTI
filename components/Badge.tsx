import type { ReactNode } from "react";
import { BADGE_LABEL, type Badge as BadgeType } from "@/lib/site";
import { Flame, Leaf, Sparkle } from "./icons";

const STYLE: Record<BadgeType, string> = {
  best: "chip--best",
  veggie: "chip--veggie",
  tradi: "chip--tradi",
  hot: "chip--hot",
};

const ICON: Record<BadgeType, ReactNode> = {
  best: <Sparkle className="h-3 w-3" />,
  veggie: <Leaf className="h-3 w-3" />,
  tradi: null,
  hot: <Flame className="h-3 w-3" />,
};

export default function Badge({ type }: { type: BadgeType }) {
  return (
    <span className={`chip ${STYLE[type]}`}>
      {ICON[type]}
      {BADGE_LABEL[type]}
    </span>
  );
}
