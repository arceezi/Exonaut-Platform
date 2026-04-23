"use client";

import { useMemo, useState } from "react";
import { Award, BadgeCheck, CalendarDays, CheckCircle2, Crown, Flame, Megaphone, MessageCircle, Search, Send, Sparkles, Star, Trophy, UserRound } from "lucide-react";
import { badgeTokens, missions, rituals } from "../data";

export function MissionList() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Approved", "In progress", "Not started"];
  const visible = useMemo(
    () => missions.filter(([, , status]) => filter === "All" || status === filter),
    [filter],
  );

  return (
    <section className="workspace">
      <div className="section-head">
        <div>
          <p className="eyebrow">Interactive queue</p>
          <h2>Mission Queue</h2>
        </div>
        <div className="segmented">
          {filters.map((item) => (
            <button className={filter === item ? "is-active" : ""} key={item} type="button" onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="work-list">
        {visible.map(([title, points, status, action]) => (
          <div className="work-row" key={title}>
            <div>
              <h3>{title}</h3>
              <p>AI-Strat - Foundation - Due Oct 23</p>
            </div>
            <div className="points">{points}</div>
            <span className="chip">{status}</span>
            <button className="button">{action}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="submit-layout">
      <aside className="submit-steps">
        {["Choose mission", "Attach proof", "Explain changes", "Submit review"].map((step, index) => (
          <div className={`submit-step ${index < (submitted ? 4 : 2) ? "submit-step--done" : ""}`} key={step}>
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </aside>
      <section className="submission-card">
        <div className="submission-card__head">
          <div>
            <p className="eyebrow">Mission deliverable</p>
            <h2>Submit for Review</h2>
          </div>
          <span className="chip">{submitted ? "Pending" : "Draft"}</span>
        </div>
        <form className="form-shell">
          <div className="field-row">
            <div className="field">
              <label htmlFor="mission">Mission</label>
              <select id="mission" defaultValue="brief">
                <option value="brief">Competitive Landscape Analysis</option>
                <option value="memo">Client Kickoff Memo</option>
                <option value="teach">Week 2 Teach-Back</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="grade">Requested Review</label>
              <select id="grade" defaultValue="excellent">
                <option value="excellent">Excellent Review</option>
                <option value="good">Good Review</option>
                <option value="revision">Needs Revision Check</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="link">Deliverable Link</label>
            <input id="link" placeholder="https://docs.google.com/..." />
          </div>
          <div className="field">
            <label htmlFor="notes">Reviewer Brief</label>
            <textarea id="notes" placeholder="What changed? What should the mission lead inspect first? What decision do you need?" />
          </div>
          <div className="upload-zone">
            <Send size={18} />
            <strong>Drop proof files here</strong>
            <span>Static prototype area for deck, PDF, screenshot, or memo attachments.</span>
          </div>
          <button className="button button--lime" type="button" onClick={() => setSubmitted(true)}>
            <Send size={14} />
            Submit Grade
          </button>
        </form>
      </section>
      <aside className="review-receipt">
        <h3>{submitted ? "Pending Review" : "Before You Submit"}</h3>
        <p>
          {submitted
            ? "Submission received in this prototype. The mission lead queue now shows a pending-review state."
            : "Include the deliverable link, a short reviewer brief, and the exact decision you want from the mission lead."}
        </p>
        <div className="receipt-line"><CheckCircle2 size={17} /> Link is visible</div>
        <div className="receipt-line"><CheckCircle2 size={17} /> Notes explain the change</div>
        <div className="receipt-line"><CheckCircle2 size={17} /> Review status is tracked</div>
      </aside>
    </div>
  );
}

export function Profile() {
  const [selected, setSelected] = useState("Silver Strategist");
  return (
    <div className="page-grid">
      <section className="detail-panel">
        <h2>Badge Vault</h2>
        <div className="badge-grid">
          {badgeTokens.map(([name, threshold]) => (
            <button className={`badge-token ${selected === name ? "badge-token--active" : ""}`} key={name} type="button" onClick={() => setSelected(name)}>
              <Award color="#6f8500" size={24} />
              <strong>{name}</strong>
              <p>{threshold}</p>
            </button>
          ))}
        </div>
      </section>
      <aside className="detail-panel">
        <h3>{selected}</h3>
        <p>Prime tier Exonaut, rank #14 of 30. Badges are permanent and remain visible after graduation into Exonaut Corps.</p>
      </aside>
    </div>
  );
}

export function Rituals() {
  const [checked, setChecked] = useState(new Set(["Monday Ignition"]));
  return (
    <section className="workspace">
      <div className="section-head">
        <div>
          <p className="eyebrow">Weekly operating rhythm</p>
          <h2>Ritual Cadence</h2>
        </div>
        <div className="label">{checked.size}/5 complete</div>
      </div>
      <div className="tracker-grid">
        {rituals.map(([name, points, status]) => {
          const active = checked.has(name);
          return (
            <button
              className={`ritual-tile ${active ? "ritual-tile--done" : ""}`}
              key={name}
              type="button"
              onClick={() =>
                setChecked((current) => {
                  const next = new Set(current);
                  if (next.has(name)) next.delete(name);
                  else next.add(name);
                  return next;
                })
              }
            >
              <BadgeCheck color="currentColor" size={22} />
              <strong>{name}</strong>
              <span>{points} - {active ? "complete" : status}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function NewsView() {
  const [topic, setTopic] = useState("All");
  const stories = [
    ["Commander's Note", "Demo day countdown begins", "Keep submissions tight, visible, and linked to client proof.", "Command", "7 min read"],
    ["Culture Signal", "Win Wall posts count this week", "Ritual consistency now adds small weekly point boosts.", "Culture", "3 min read"],
    ["Cohort Watch", "Silver Strategist threshold opened", "Eight Exonauts are within one approved mission of Silver.", "Progress", "4 min read"],
  ];
  const visible = topic === "All" ? stories : stories.filter((story) => story[3] === topic);

  return (
    <section className="news-layout">
      <article className="news-hero">
        <span className="chip">Featured</span>
        <h2>Week 2 is where the portal starts becoming a habit.</h2>
        <p>Mission reviews, ritual points, and Foundation work now sit in one visible operating rhythm.</p>
        <button className="button button--lime" type="button">Read dispatch</button>
      </article>
      <aside className="news-filter">
        {["All", "Command", "Culture", "Progress"].map((item) => (
          <button className={topic === item ? "is-active" : ""} key={item} type="button" onClick={() => setTopic(item)}>
            {item}
          </button>
        ))}
      </aside>
      <div className="news-list">
        {visible.map(([label, title, copy, tag, time]) => (
          <article className="news-story" key={title}>
            <div>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
            <div className="news-story__meta">
              <strong>{tag}</strong>
              <span>{time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LeaderboardView() {
  const [scope, setScope] = useState("Total");
  const leaders = [
    ["1", "Rina Vale", "Gold Innovator", "642", "+48", "94%"],
    ["2", "Ken Mori", "Silver Strategist", "591", "+37", "89%"],
    ["3", "Isha Tan", "Silver Strategist", "552", "+41", "87%"],
    ["14", "Maya Chen", "Prime", "347", "+85", "71%"],
  ];

  return (
    <section className="leaderboard">
      <div className="podium">
        {leaders.slice(0, 3).map(([rank, name, tier, points], index) => (
          <article className={`podium-card podium-card--${index + 1}`} key={name}>
            <Crown size={24} />
            <span>#{rank}</span>
            <h2>{name}</h2>
            <p>{tier}</p>
            <strong>{points} pts</strong>
          </article>
        ))}
      </div>
      <div className="leaderboard-board">
        <div className="section-head">
          <div>
            <p className="eyebrow">Gamified rank</p>
            <h2>Cohort Ladder</h2>
          </div>
          <div className="segmented">
            {["Total", "Project", "Foundation"].map((item) => (
              <button className={scope === item ? "is-active" : ""} key={item} type="button" onClick={() => setScope(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        {leaders.map(([rank, name, tier, points, gain, consistency]) => (
          <div className={`leader-row ${name === "Maya Chen" ? "leader-row--self" : ""}`} key={name}>
            <strong>#{rank}</strong>
            <div className="leader-avatar">{name.split(" ").map((part) => part[0]).join("")}</div>
            <div>
              <h3>{name}</h3>
              <p>{tier} - {scope} board</p>
            </div>
            <span>{points} pts</span>
            <span className="chip">{gain} wk</span>
            <div className="leader-meter"><span style={{ width: consistency }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function KudosView() {
  const [kudos, setKudos] = useState(["For turning a messy client brief into a clean decision tree."]);
  const comments = [
    ["Ava", "Maya", kudos[0], "12 cheers"],
    ["Ken", "Isha", "For teaching the cohort a faster research workflow.", "9 cheers"],
    ["Lead", "Batch", "For shipping the week with zero silent blockers.", "18 cheers"],
  ];

  return (
    <div className="kudos-layout">
      <section className="kudos-feed">
        {comments.map(([from, to, copy, cheers]) => (
          <article className="kudos-comment" key={`${from}-${to}`}>
            <div className="leader-avatar">{from[0]}{to[0]}</div>
            <div>
              <div className="kudos-comment__head">
                <strong>{from} to {to}</strong>
                <span>{cheers}</span>
              </div>
              <p>"{copy}"</p>
              <button type="button"><Flame size={15} /> Cheer</button>
            </div>
          </article>
        ))}
      </section>
      <aside className="kudos-composer">
        <h2>Send Kudos</h2>
        <p>Keep it specific: what did they do, and why did it matter?</p>
        <div className="form-shell">
          <div className="field">
            <label htmlFor="kudos">Recognition</label>
            <textarea id="kudos" placeholder="Write a short recognition note." />
          </div>
          <button className="button button--lime" type="button" onClick={() => setKudos(["New kudos drafted in the prototype workspace."])}>
            Post Kudos
          </button>
        </div>
      </aside>
    </div>
  );
}

export function AnnouncementsView() {
  const [pinned, setPinned] = useState("Review Window");
  const announcements = [
    ["Review Window", "Mission reviews close Friday at 18:00 PHT.", "Urgent"],
    ["LinkedIn Sprint", "Publish with the Exonaut pledge before Week 3 kickoff.", "Culture"],
    ["Demo Prep", "Client proof points are now required in project updates.", "Action"],
  ];

  return (
    <section className="announcement-board">
      <article className="announcement-pinned">
        <Megaphone size={30} />
        <span className="chip">Pinned</span>
        <h2>{pinned}</h2>
        <p>{announcements.find(([title]) => title === pinned)?.[1]}</p>
      </article>
      <div className="announcement-list">
        {announcements.map(([title, copy, tag]) => (
          <button className={pinned === title ? "is-active" : ""} key={title} type="button" onClick={() => setPinned(title)}>
            <span>{tag}</span>
            <strong>{title}</strong>
            <p>{copy}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export function AlumniView() {
  const alumni = [
    ["Lea Santos", "AI Strategy", "Mentor", "LS"],
    ["Marco Lim", "Client Systems", "Hiring Partner", "ML"],
    ["Nina Park", "Growth Ops", "Office Hours", "NP"],
    ["Theo Cruz", "Foundation", "Referral Lead", "TC"],
  ];

  return (
    <section className="alumni-layout">
      <div className="alumni-search">
        <Search size={18} />
        <input placeholder="Search alumni, role, or track" />
      </div>
      <div className="alumni-grid">
        {alumni.map(([name, track, role, initials]) => (
          <article className="alumni-profile" key={name}>
            <div className="alumni-photo">{initials}</div>
            <span>{track}</span>
            <h2>{name}</h2>
            <p>{role}</p>
            <button className="button" type="button"><MessageCircle size={14} /> Message</button>
          </article>
        ))}
      </div>
      <aside className="alumni-callout">
        <UserRound size={24} />
        <h2>Once an Exonaut, always an Exonaut.</h2>
        <p>Use the alumni portal to find mentors, referrals, and proof from previous cohorts.</p>
      </aside>
    </section>
  );
}

export function GenericSection() {
  return (
    <div className="page-grid">
      <section className="stack">
        {[
          [BadgeCheck, "Manual Badge Award", "Pillar and special awards are ready for commander approval."],
          [Megaphone, "Broadcast Drafts", "Announcements can be pinned to the portal surface."],
          [Trophy, "Cohort Controls", "Rank, badge, and mission queues are staged as static UI."],
        ].map(([Icon, title, copy]) => {
          const RenderIcon = Icon as React.ElementType;
          return (
            <article className="detail-panel" key={title as string}>
              <RenderIcon color="#6f8500" size={22} />
              <h2>{title as string}</h2>
              <p>{copy as string}</p>
            </article>
          );
        })}
      </section>
      <aside className="detail-panel">
        <h3>Foundation Notes</h3>
        <p>This route is ready for the next feature documentation pass.</p>
      </aside>
    </div>
  );
}
