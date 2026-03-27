"use client";

import { clockItems } from "../lib/placeholders";
import { useState } from "react";

export function ClockHero() {
  const [active, setActive] = useState<(typeof clockItems)[number] | null>(null);

  return (
    <main className="relative grain flex min-h-screen flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 bg-atmosphere" />

      <div className="absolute left-1/2 top-[18%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_#F1B085_0%,_#E88E68_60%,_#CC7D72_100%)] shadow-sun" />

      <div className="absolute left-1/2 top-[34%] h-[52vh] w-[85vw] max-w-[720px] -translate-x-1/2 rounded-full border border-white/10 opacity-30" />
      <div className="absolute left-1/2 top-[46%] h-6 w-6 rounded-full bg-moonwash/80 blur-[1px]" style={{ transform: "translateX(150px)" }} />

      <div className="absolute left-1/2 top-[36%] h-[40vh] w-[80vw] max-w-[680px] -translate-x-1/2 rounded-full border border-moonwash/10 opacity-20" />
      <div className="absolute left-1/2 top-[52%] h-[36vh] w-[78vw] max-w-[640px] -translate-x-1/2 rounded-[50%] border border-dusk/40 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-8 pt-24">
        <div className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-ash">
          A living biblical clock
        </div>

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="font-display text-5xl leading-none text-bone md:text-7xl">
            Earth &amp; Times
          </h1>
          <p className="mt-4 text-sm text-ash md:text-base">
            Watch the heavens. Discern the times.
          </p>
        </div>

        <div className="panel mx-auto max-w-5xl rounded-none border-x-0 border-b-0 border-t px-5 py-5 md:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7">
            {clockItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item)}
                className="text-left"
              >
                <div className="font-display text-lg text-bone">{item.value}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setActive(null)}
        >
          <div
            className="panel absolute inset-x-4 bottom-4 rounded-3xl p-6 md:left-auto md:right-6 md:w-[380px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ash">
              {active.label}
            </div>
            <div className="mt-2 font-display text-3xl text-bone">
              {active.value}
            </div>
            <p className="mt-4 text-sm leading-7 text-ash">{active.detail}</p>
            <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-moonwash">
              Related scripture placeholder
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
