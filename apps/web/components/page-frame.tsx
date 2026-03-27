export function PageFrame({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-20 pt-28">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
        {eyebrow}
      </div>
      <h1 className="mt-3 font-display text-5xl leading-none text-bone md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-ash">{intro}</p>
      <div className="mt-8 h-px w-full max-w-3xl bg-white/10" />
      <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ash">
        Placeholder route scaffold for the initial Vercel preview
      </div>
      <div className="mt-12">{children}</div>
    </main>
  );
}
