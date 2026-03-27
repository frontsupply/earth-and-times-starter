import { PageFrame } from "../../components/page-frame";

export default function Page() {
  return (
    <PageFrame eyebrow="Verse explorer" title="Scripture" intro="Browse scriptures by topic and worldview lane.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">By Topic</div>
          <p className="mt-3 text-sm leading-7 text-ash">Firmament, foundations, luminaries, day and night, feasts, and more.</p>
        </div>
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">By Lane</div>
          <p className="mt-3 text-sm leading-7 text-ash">Earth, Times, Feasts, Convergence, and Witnessing.</p>
        </div>
        <div className="panel rounded-3xl p-6 md:col-span-2">
          <div className="font-display text-2xl text-bone">Next Phase Connection</div>
          <p className="mt-3 text-sm leading-7 text-ash">
            This route is scaffolded to pull topical verse collections from Supabase once the
            content helpers land in Phase 2.
          </p>
        </div>
      </div>
    </PageFrame>
  );
}
