export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-cream">
      <div className="flex flex-col items-center gap-5">
        <span className="loader-diamond" aria-hidden />
        <span className="font-hand text-2xl text-harissa">Benti arrive…</span>
      </div>
    </div>
  );
}
