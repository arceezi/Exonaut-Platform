"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Bell, CheckCircle2, LogOut, Settings, SlidersHorizontal, UserRoundCheck, UsersRound, X } from "lucide-react";
import { navGroups } from "../data";

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [role, setRole] = useState("Exonaut - Intern");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [now, setNow] = useState("");

  useEffect(() => {
    const update = () =>
      setNow(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Manila",
        }).format(new Date()),
      );
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="portal">
      <aside className="sidebar">
        <div className="brand">
          <h1 className="brand__name">EXOASIA</h1>
          <div className="brand__sub">Foundation Portal - v2.1</div>
        </div>

        <div className="identity-card">
          <div className="avatar" aria-hidden="true" />
          <div>
            <strong>Maya Chen</strong>
            <span>Prime - #14</span>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className={`nav__label ${group.admin ? "nav__label--admin" : ""}`}>{group.label}</div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <Link
                    className={`nav__link ${active ? "nav__link--active" : ""}`}
                    href={item.href}
                    key={item.href}
                  >
                    <Icon size={15} strokeWidth={2.4} />
                    <span>{item.label}</span>
                    {"badge" in item && item.badge ? <span className="nav__badge">{item.badge}</span> : null}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="sidebar__foot">
          <button aria-label="Notifications">
            <Bell size={18} />
          </button>
          <button aria-label="Settings">
            <Settings size={18} />
          </button>
          <button aria-label="Log out">
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="role-tabs">
            {["Exonaut - Intern", "Lead - Manager", "Commander - Director"].map((item, index) => (
              <button
                className={`role-tab ${role === item ? "role-tab--active" : ""}`}
                key={item}
                type="button"
                onClick={() => setRole(item)}
              >
                {index === 0 ? <UserRoundCheck size={13} /> : index === 1 ? <UsersRound size={13} /> : null}
                {item}
              </button>
            ))}
          </div>

          <div className="system-status">
            <span>EXO-BATCH-2026</span>
            <span>WK 2/12</span>
            <span>{now || "--:--:--"} PHT</span>
            <span className="live-dot" aria-hidden="true" />
            <span>Live</span>
          </div>
        </header>

        {children}

        {drawerOpen ? (
          <aside className="quick-panel">
            <button className="quick-panel__close" type="button" aria-label="Close quick panel" onClick={() => setDrawerOpen(false)}>
              <X size={17} />
            </button>
            <p className="eyebrow">Quick actions</p>
            <h2>Foundation Check-In</h2>
            <div className="quick-panel__item">
              <CheckCircle2 size={18} />
              <span>Current role view: {role}</span>
            </div>
            <div className="quick-panel__item">
              <CheckCircle2 size={18} />
              <span>Ritual tracker and mission filters are interactive.</span>
            </div>
            <button className="button button--lime" type="button" onClick={() => setDrawerOpen(false)}>
              Done
            </button>
          </aside>
        ) : null}

        <div className="floating-actions" aria-label="Quick actions">
          <button className="fab fab--primary" aria-label="Open quick check-in" onClick={() => setDrawerOpen(true)}>
            <UserRoundCheck size={19} />
          </button>
          <button className="fab" aria-label="Open filters" onClick={() => setDrawerOpen(true)}>
            <SlidersHorizontal size={19} />
          </button>
        </div>
      </main>
    </div>
  );
}
