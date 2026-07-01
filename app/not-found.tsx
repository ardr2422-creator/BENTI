import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-cream px-4 py-32 text-center">
      <div className="zellige absolute inset-0 opacity-50" aria-hidden />
      <div className="relative">
        <Image
          src="/brand/logo.png"
          alt="Benti"
          width={120}
          height={112}
          className="mx-auto h-20 w-auto animate-floaty"
        />
        <p className="mt-8 font-display text-[clamp(4rem,3rem+8vw,9rem)] leading-none text-terracotta">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl text-sidi-ink">
          Cette page a filé à Sidi Bou Saïd.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          La page que vous cherchez n&apos;existe pas ou a changé d&apos;adresse.
          Revenons à l&apos;essentiel : le makloub.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn--flame">
            <span>Retour à l&apos;accueil</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/carte" className="btn btn--ghost">
            <span>Voir la carte</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
