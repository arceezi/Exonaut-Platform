import { notFound } from "next/navigation";
import { PortalShell } from "../components/PortalShell";
import {
  AlumniView,
  AnnouncementsView,
  GenericSection,
  KudosView,
  LeaderboardView,
  MissionList,
  NewsView,
  Profile,
  Rituals,
  SubmitForm,
} from "../components/SectionWorkspaces";
import { pages } from "../data";

type SectionKey = keyof typeof pages;

const pageKeys = Object.keys(pages) as SectionKey[];

export function generateStaticParams() {
  return pageKeys.map((section) => ({ section }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!pageKeys.includes(section as SectionKey)) {
    notFound();
  }

  const page = pages[section as SectionKey];

  return (
    <PortalShell>
      <section className="content">
        <div className="hero-row">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="page-title">{page.title}</h1>
            <p className="serif-note">{page.note}</p>
          </div>
          <div className="day-count">
            <strong>WK2</strong>
            <span> /12</span>
            <div className="label">Prototype route</div>
          </div>
        </div>

        {section === "news" ? <NewsView /> : section === "submit-form" ? <SubmitForm /> : section === "leaderboard" ? <LeaderboardView /> : section === "profile" ? <Profile /> : section === "kudos" ? <KudosView /> : section === "rituals" ? <Rituals /> : section === "announcements" ? <AnnouncementsView /> : section === "alumni" ? <AlumniView /> : section === "missions" ? <MissionList /> : <GenericSection />}
      </section>
    </PortalShell>
  );
}
