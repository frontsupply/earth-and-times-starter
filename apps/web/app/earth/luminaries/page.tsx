import { PageFrame } from "../../../components/page-frame";

export default function Page() {
  return (
    <PageFrame eyebrow="Earth" title="Luminaries" intro="Sun, moon, and stars as lights and signs.">
      <div className="grid gap-6 md:grid-cols-2">
            <div className="panel rounded-3xl p-6"><p className="text-sm leading-7 text-ash">Placeholder content for this section.</p></div>
      </div>
    </PageFrame>
  );
}
