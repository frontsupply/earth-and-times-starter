import Link from "next/link";
import { PageFrame } from "../../components/page-frame";

export default function Page() {
  return (
    <PageFrame eyebrow="Scriptural history and appointed times" title="Times" intro="Explore chronology, calendar logic, feasts, and convergence.">
      <div className="grid gap-6 md:grid-cols-2">
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/times/chronology">
          <div className="font-display text-2xl text-bone">Chronology</div>
          <p className="mt-3 text-sm leading-7 text-ash">Adamic timeline, Anno Mundi structure, and eras of biblical history.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/times/appointed-times">
          <div className="font-display text-2xl text-bone">Appointed Times</div>
          <p className="mt-3 text-sm leading-7 text-ash">Calendar basics, day-beginning logic, new moon questions, and feast pages.</p>
        </Link>
        <Link className="panel rounded-3xl p-6 transition hover:border-white/20 hover:bg-white/[0.04]" href="/times/convergence">
          <div className="font-display text-2xl text-bone">Convergence</div>
          <p className="mt-3 text-sm leading-7 text-ash">Historical rhythms, nested cycles, and current boundary-point interpretation.</p>
        </Link>
      </div>
    </PageFrame>
  );
}
