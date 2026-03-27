import { PageFrame } from "../../components/page-frame";

export default function Page() {
  return (
    <PageFrame eyebrow="Long-form depth" title="Studies" intro="Read foundational, chronological, convergence, and response studies.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">Foundational</div>
          <p className="mt-3 text-sm leading-7 text-ash">Core cosmology and timekeeping materials.</p>
        </div>
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">Chronology & Time</div>
          <p className="mt-3 text-sm leading-7 text-ash">Timeline and calendar studies.</p>
        </div>
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">Responses</div>
          <p className="mt-3 text-sm leading-7 text-ash">Transcript-based and rebuttal-oriented content.</p>
        </div>
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">Content Source</div>
          <p className="mt-3 text-sm leading-7 text-ash">Phase 2 will move these study cards and slugs to Supabase-backed content records.</p>
        </div>
      </div>
    </PageFrame>
  );
}
