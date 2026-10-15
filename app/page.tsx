"use client";

import { useState } from "react";

const initialTasks = [
  {
    id: 1,
    name: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
  },
  {
    id: 2,
    name: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(
    initialTasks.map((task) => ({ ...task, completed: false }))
  );

  const completedCount = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((completedCount / tasks.length) * 100);

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main className="dashboard">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2.8 20 6v5.6c0 5.1-3.4 8.2-8 9.8-4.6-1.6-8-4.7-8-9.8V6l8-3.2Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <div>
            <p className="eyebrow">Preparation log // Black Bulls</p>
            <p className="topbar-title">Dashboard</p>
          </div>
        </div>
        <p className="operator-id">Asta // 001</p>
      </header>

      <div className="dashboard-content">
        <section className="introduction" aria-labelledby="page-title">
          <p className="faction-label">Clover Kingdom // Black Bulls</p>
          <h1 id="page-title">Asta’s Preparation Dashboard</h1>
          <p className="intro-copy">
            Operational preparation for the confrontation with Lucifero. Track
            Asta’s essential drills across anti-magic mastery, physical
            conditioning, and squad battle plans.
          </p>
        </section>

        <section
          className="threat-panel"
          aria-labelledby="threat-brief-heading"
        >
          <div className="panel-heading">
            <div className="panel-title">
              <svg
                className="warning-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3 22 21H2L12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 9v5m0 3h.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h2 id="threat-brief-heading">
                Threat brief // Supreme Devil Lucifero
              </h2>
            </div>
            <span className="threat-tag">Cataclysmic</span>
          </div>
          <p className="threat-copy">
            <strong>Reconnaissance summary:</strong> King of Devils and ruler of
            gravity magic. Gravity magic suppression negates conventional
            magical defenses. Direct anti-magic negation and supreme physical
            fortitude are required for tactical engagement.
          </p>
        </section>

        <section className="progress-panel" aria-labelledby="progress-heading">
          <div className="progress-summary">
            <div>
              <p className="eyebrow">Training plan completion</p>
              <h2 id="progress-heading">Progress summary</h2>
            </div>
            <div className="progress-numbers">
              <span className="progress-percent">{percentage}%</span>
              <span className="progress-count">
                {completedCount} of {tasks.length} tasks completed
              </span>
            </div>
          </div>

          <div
            className="progress-track"
            role="progressbar"
            aria-label="Training plan completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percentage}
            aria-valuetext={`${completedCount} of ${tasks.length} tasks completed, ${percentage}%`}
          >
            {tasks.map((task, index) => (
              <span
                key={task.id}
                className={`progress-segment${index < completedCount ? " is-complete" : ""}`}
                aria-hidden="true"
              />
            ))}
          </div>

          <p className="progress-disclaimer">
            <span className="info-icon" aria-hidden="true">
              i
            </span>
            This metric reflects training-plan completion only, not combat
            probability or battle outcome prediction.
          </p>
        </section>

        <section className="tasks-section" aria-labelledby="tasks-heading">
          <div className="tasks-heading">
            <h2 id="tasks-heading">Mandatory combat objectives</h2>
            <p>Count: {tasks.length} drills</p>
          </div>

          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id}>
                <article
                  className={`task-card${task.completed ? " is-complete" : ""}`}
                  aria-labelledby={`task-title-${task.id}`}
                >
                  <div className="task-meta">
                    <span className="task-index">
                      [Task-{String(task.id).padStart(2, "0")}]
                    </span>
                    <span
                      className={`priority-badge priority-${task.priority.toLowerCase()}`}
                    >
                      {task.priority === "High" ? "! " : ""}
                      {task.priority} priority
                    </span>
                    <span
                      className={`status-badge${task.completed ? " status-complete" : ""}`}
                    >
                      <span className="status-indicator" aria-hidden="true" />
                      {task.completed ? "Completed" : "Incomplete"}
                    </span>
                  </div>

                  <h3 id={`task-title-${task.id}`}>{task.name}</h3>
                  <p className="task-description">{task.description}</p>

                  <div className="task-action">
                    <button
                      type="button"
                      className="task-button"
                      aria-pressed={task.completed}
                      aria-label={`Mark ${task.name} as ${task.completed ? "incomplete" : "complete"}`}
                      onClick={() => toggleTask(task.id)}
                    >
                      <span
                        className={`checkbox-icon${task.completed ? " checked" : ""}`}
                        aria-hidden="true"
                      >
                        {task.completed ? "×" : ""}
                      </span>
                      {task.completed ? "Undo completion" : "Mark complete"}
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}