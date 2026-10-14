
"use client";

import { useState } from "react";

export default function Home() {
  // Our three predefined training tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sword control", completed: false },
    { id: 2, name: "Physical endurance", completed: false },
    { id: 3, name: "Team coordination", completed: false },
  ]);

  // Calculate how many tasks are completed
  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  // Calculate the preparation percentage
  const percentage = Math.round(
    (completedCount / tasks.length) * 100
  );

  // Complete or undo a task
  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 p-8 text-white">
      <h1 className="mb-4 text-3xl font-bold">
        Asta's Preparation Dashboard
      </h1>

      <h2 className="mb-2 text-xl">Training Progress</h2>

      <p>
        {completedCount}/{tasks.length} tasks completed
      </p>

      <p className="mb-6">Preparation: {percentage}%</p>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="rounded-lg border border-gray-700 p-4"
          >
            <p className="mb-2">{task.name}</p>

            <p className="mb-2">
              Status: {task.completed ? "Completed" : "Incomplete"}
            </p>

            <button
              type="button"
              onClick={() => toggleTask(task.id)}
              className="rounded bg-red-700 px-4 py-2 text-white"
            >
              {task.completed ? "Undo" : "Mark Complete"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
