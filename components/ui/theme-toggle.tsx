"use client";

import { useEffect } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const theme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    document.documentElement.dataset.theme = theme;
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme: Theme = root.dataset.theme === "light" ? "dark" : "light";

    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="theme-toggle flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-lg text-[var(--foreground)]"
    >
      <span className="theme-toggle-icon" aria-hidden="true" />
    </button>
  );
}
