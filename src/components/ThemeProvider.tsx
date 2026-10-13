"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<{theme: Theme; toggleTheme: () => void}>({ theme: "light", toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    try {
      const preferred = window.localStorage.getItem("portfolio-theme");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (preferred === "dark") setTheme("dark");
    } catch { /* Storage may be blocked, the light default still works. */ }
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  function toggleTheme() {
    setTheme(current => {
      const next = current === "light" ? "dark" : "light";
      try { window.localStorage.setItem("portfolio-theme", next); } catch { /* optional persistence */ }
      return next;
    });
  }
  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
