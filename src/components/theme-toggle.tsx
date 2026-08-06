"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Both icons are always rendered and swapped by the `dark` class, so the markup is
 * identical on server and client — no hydration mismatch and no mounted-state flash.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="relative grid size-9 cursor-pointer place-items-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      <Sun className="absolute size-4 rotate-0 scale-100 transition-transform duration-300 dark:rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 -rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
