import {
  Bell,
  BookOpen,
  CalendarCheck,
  ClipboardList,
  Gauge,
  Handshake,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  ScrollText,
  Shield,
  Star,
  Trophy,
  User,
  Users,
} from "lucide-react";

export const navGroups = [
  {
    label: "Program",
    items: [
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      { label: "News", href: "/news", icon: Newspaper },
      { label: "Missions", href: "/missions", icon: Gauge, badge: "3" },
      { label: "Submit Form", href: "/submit-form", icon: ClipboardList },
      { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
      { label: "Profile", href: "/profile", icon: User },
    ],
  },
  {
    label: "Culture",
    items: [
      { label: "Kudos", href: "/kudos", icon: Handshake },
      { label: "Rituals", href: "/rituals", icon: CalendarCheck },
      { label: "Announcements", href: "/announcements", icon: Megaphone },
      { label: "Alumni Corps", href: "/alumni", icon: Users },
    ],
  },
  {
    label: "Admin",
    admin: true,
    items: [{ label: "Admin Console", href: "/admin", icon: Shield }],
  },
];

export const pages = {
  news: {
    eyebrow: "Exo-feed - Week 2 Dispatch",
    title: "News",
    note: "Latest operator notes, culture updates, and batch signals.",
  },
  missions: {
    eyebrow: "Review queue - Mission detail",
    title: "Missions",
    note: "Track every active, pending, and approved mission in the cohort.",
  },
  "submit-form": {
    eyebrow: "Deliverable intake - Exonaut submits",
    title: "Submit Form",
    note: "A front-end shell for mission submission, grading status, and reviewer notes.",
  },
  leaderboard: {
    eyebrow: "Cohort rank - All pillars",
    title: "Leaderboard",
    note: "Transparent ranking across points, missions, rituals, and badges.",
  },
  profile: {
    eyebrow: "Permanent record - Badge vault",
    title: "Profile",
    note: "Identity, points, certificates, and locked badge silhouettes.",
  },
  kudos: {
    eyebrow: "Culture loop - Pay it forward",
    title: "Kudos",
    note: "Peer recognition for builders who ship, help, and raise the standard.",
  },
  rituals: {
    eyebrow: "Weekly tracker - Operating cadence",
    title: "Rituals",
    note: "Ignition, win wall, reflections, and teach-back participation.",
  },
  announcements: {
    eyebrow: "Command channel - Batch broadcast",
    title: "Announcements",
    note: "Pinned notices and urgent updates from the Exoasia team.",
  },
  alumni: {
    eyebrow: "Exonaut Corps - Always an Exonaut",
    title: "Alumni Portal",
    note: "A continuing network for mentors, referrals, wins, and demo day proof.",
  },
  admin: {
    eyebrow: "Admin console - Manual awards",
    title: "Admin Console",
    note: "Prototype panels for badge awards, review queues, and cohort controls.",
  },
};

export const metrics = [
  { label: "Total points", value: "347", sub: "+85 this week", good: true, lime: true },
  { label: "Rank", value: "#14", sub: "+3 vs last wk" },
  { label: "Tier", value: "PRIME", sub: "253 to elite" },
  { label: "Missions", value: "3", sub: "2 due this week" },
  { label: "Badges", value: "3", sub: "Silver strategist", good: true },
];

export const pillars = [
  {
    label: "Pillar 01 - 40% weighted",
    weight: "40% weight",
    title: "Project",
    score: "162",
    total: "400 pts",
    value: "40%",
    accent: "#c9e500",
    lines: [
      ["Client Discovery Memo", "APPR"],
      ["Competitive Landscape", "WIP"],
      ["AI Strategy Canon", "APPR"],
    ],
  },
  {
    label: "Pillar 02 - 35% weighted",
    weight: "35% weight",
    title: "Client",
    score: "125",
    total: "350 pts",
    value: "36%",
    accent: "#8cecff",
    lines: [
      ["Client - Kestrel Biotics", "4.0 / 5.0"],
      ["Last touch", "Oct 17"],
      ["Account lead sync", "3d ago"],
    ],
  },
  {
    label: "Pillar 03 - 25% weighted",
    weight: "25% weight",
    title: "Foundation",
    score: "60",
    total: "250 pts",
    value: "24%",
    accent: "#b095c5",
    lines: [
      ["Identity language", "Ready"],
      ["Culture rituals", "Open"],
      ["Alumni pledge", "Draft"],
    ],
  },
];

export const missions = [
  ["Competitive Landscape Analysis - AI Strategy Client Brief", "+30", "In progress", "Continue"],
  ["Client Kickoff Memo - First 1:1 with Account Lead", "+20", "Not started", "Start"],
  ["Week 2 Teach-Back - Pick a Skill and Teach the Cohort", "+15", "Not started", "Start"],
  ["Client Discovery - 60 Minutes with Kestrel", "+45", "Approved", "Review"],
  ["Exonaut Pledge and LinkedIn Announcement", "+70", "Approved", "Review"],
  ["Track Orientation - The AI Strategy Canon", "+40", "Approved", "Review"],
];

export const rituals = [
  ["Monday Ignition", "+5 pts", "complete"],
  ["Win Wall", "+5 pts", "complete"],
  ["Friday Reflection", "+8 pts", "open"],
  ["Teach-Back", "+15 pts", "pending"],
  ["Kudos Given", "+3 pts", "complete"],
];

export const badgeTokens = [
  ["Bronze Builder", "100 total points"],
  ["Silver Strategist", "300 total points"],
  ["Gold Innovator", "600 total points"],
  ["Platinum Disruptor", "900 total points"],
];

export const IconBell = Bell;
export const IconBookOpen = BookOpen;
export const IconScrollText = ScrollText;
export const IconStar = Star;
