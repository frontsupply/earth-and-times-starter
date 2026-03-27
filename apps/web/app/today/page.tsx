import { PageFrame } from "../../components/page-frame";

export default function Page() {
  return (
    <PageFrame eyebrow="Current moment" title="Today" intro="A daily interpretation layer built from the live clock state.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">Today in God’s Calendar</div>
          <p className="mt-3 text-sm leading-7 text-ash">Surface the current biblical hour, Hebrew date, moon day, and feast proximity.</p>
        </div>
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">This Moment</div>
          <p className="mt-3 text-sm leading-7 text-ash">Turn raw clock outputs into a short contemplative summary.</p>
        </div>
        <div className="panel rounded-3xl p-6">
          <div className="font-display text-2xl text-bone">Next Marker</div>
          <p className="mt-3 text-sm leading-7 text-ash">Show the next sunset, sunrise, new moon, or feast window.</p>
        </div>
      </div>
    </PageFrame>
  );
}
