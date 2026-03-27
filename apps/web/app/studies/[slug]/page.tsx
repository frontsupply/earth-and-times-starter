import { PageFrame } from "../../../components/page-frame";

export default async function StudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <PageFrame eyebrow="Studies" title={slug} intro="Dynamic study page placeholder.">
      <div className="panel rounded-3xl p-6 text-sm leading-7 text-ash">
        Long-form study content will live here.
      </div>
    </PageFrame>
  );
}
