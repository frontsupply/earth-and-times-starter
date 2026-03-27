import Link from "next/link";
import { PageFrame } from "../../components/page-frame";

export default function Page() {
  return (
    <PageFrame eyebrow="Scriptural architecture of the world" title="Earth" intro="A topic-based library for cosmology, firmament, foundations, luminaries, and more.">
      <div className="grid gap-6 md:grid-cols-2">
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/earth/scriptural-architecture">
          <div className="font-display text-2xl text-bone">Scriptural Architecture</div>
          <p className="mt-3 text-sm leading-7 text-ash">An overview of the cosmos as a unified biblical structure.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/earth/firmament">
          <div className="font-display text-2xl text-bone">Firmament</div>
          <p className="mt-3 text-sm leading-7 text-ash">Rakia, the vault, and the structure above.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/earth/waters-above-and-below">
          <div className="font-display text-2xl text-bone">Waters Above and Below</div>
          <p className="mt-3 text-sm leading-7 text-ash">The separated waters, the deep, and the layered biblical cosmos.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/earth/foundations-and-pillars">
          <div className="font-display text-2xl text-bone">Foundations and Pillars</div>
          <p className="mt-3 text-sm leading-7 text-ash">Texts on established structure, stability, and the earth’s supporting frame.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/earth/fixed-earth">
          <div className="font-display text-2xl text-bone">Fixed Earth</div>
          <p className="mt-3 text-sm leading-7 text-ash">Witness passages describing motion, immovability, and orientation.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/earth/luminaries">
          <div className="font-display text-2xl text-bone">Luminaries</div>
          <p className="mt-3 text-sm leading-7 text-ash">Sun, moon, and stars within the heavens.</p>
        </Link>
      </div>
    </PageFrame>
  );
}
