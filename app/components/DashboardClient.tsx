"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Plus, Sparkles } from "lucide-react";
import { metrics, pillars, rituals } from "../data";

export function DashboardClient() {
  const [activePillar, setActivePillar] = useState("Project");
  const [completed, setCompleted] = useState(() => new Set(["Monday Ignition", "Win Wall", "Kudos Given"]));

  const bonusPoints = completed.size * 5;
  const visibleMetrics = useMemo(
    () =>
      metrics.map((metric) =>
        metric.label === "Total points"
          ? { ...metric, value: String(347 + bonusPoints), sub: `+${85 + bonusPoints} this week` }
          : metric
      ),
    [bonusPoints],
  );

  function toggleRitual(name: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  return (
    <section className="content">
      <div className="hero-row hero-row--foundation">
        <div>
          <p className="eyebrow">Foundation workspace</p>
          <h1 className="page-title">Maya Chen</h1>
          <p className="serif-note">A brighter operating surface for missions, rituals, and culture progress.</p>
        </div>
        <div className="foundation-summary">
          <div className="label">Active focus</div>
          <strong>{activePillar}</strong>
          <span>{completed.size}/5 rituals checked</span>
        </div>
      </div>

      <div className="metrics">
        {visibleMetrics.map((metric) => (
          <button className="metric metric--button" key={metric.label} type="button">
            <div className="label">{metric.label}</div>
            <div className={`metric__value ${metric.lime ? "metric__value--lime" : ""}`}>{metric.value}</div>
            <div className={`metric__sub ${metric.good ? "metric__good" : ""}`}>{metric.sub}</div>
          </button>
        ))}
      </div>

      <div className="pillar-grid">
        {pillars.map((pillar) => {
          const active = pillar.title === activePillar;
          return (
            <article
              className={`panel pillar ${active ? "pillar--active" : ""}`}
              key={pillar.title}
              style={{ "--accent": pillar.accent } as React.CSSProperties}
            >
              <div className="panel-top">
                <span>{pillar.label}</span>
                <span>{pillar.weight}</span>
              </div>
              <h2>{pillar.title}</h2>
              <div className="score">
                <strong>{pillar.score}</strong>
                <span>/ {pillar.total}</span>
              </div>
              <div className="progress" style={{ "--value": pillar.value } as React.CSSProperties}>
                <span />
              </div>
              <div className="micro-list">
                {pillar.lines.map(([left, right]) => (
                  <div className="micro-line" key={`${pillar.title}-${left}`}>
                    <span>{left}</span>
                    <span className={right === "WIP" ? "chip chip--amber" : "chip"}>{right}</span>
                  </div>
                ))}
              </div>
              <button className="button button--soft" type="button" onClick={() => setActivePillar(pillar.title)}>
                <Sparkles size={14} />
                Focus
              </button>
            </article>
          );
        })}
      </div>

      <section className="workspace">
        <div className="section-head">
          <div>
            <p className="eyebrow">Interactive cadence</p>
            <h2>Weekly Ritual Tracker</h2>
          </div>
          <div className="label">Click a ritual to update the dashboard</div>
        </div>
        <div className="tracker-grid">
          {rituals.map(([name, points, status]) => {
            const done = completed.has(name);
            return (
              <button
                className={`ritual-tile ${done ? "ritual-tile--done" : ""}`}
                key={name}
                type="button"
                onClick={() => toggleRitual(name)}
              >
                <CheckCircle2 size={22} />
                <strong>{name}</strong>
                <span>{done ? "complete" : status} - {points}</span>
              </button>
            );
          })}
        </div>
      </section>
    </section>
  );
}
