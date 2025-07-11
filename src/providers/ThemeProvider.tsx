import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "../context/ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev: string) => (prev === "light" ? "dark" : "light"));

  const setNewTheme = (t: Theme) => setTheme(t);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme: setNewTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
