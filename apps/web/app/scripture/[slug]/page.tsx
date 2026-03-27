import { PageFrame } from "../../../components/page-frame";

export default async function ScriptureDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <PageFrame eyebrow="Scripture" title={slug} intro="Dynamic scripture detail page placeholder.">
      <div className="panel rounded-3xl p-6 text-sm leading-7 text-ash">
        Verse content and related topics will live here.
      </div>
    </PageFrame>
  );
}
