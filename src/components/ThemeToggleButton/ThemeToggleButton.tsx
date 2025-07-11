import { useTheme } from "../../hooks/useTheme";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ThemeToggleButton.css";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-button">
      <ButtonComponent
        label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={toggleTheme}
      />
    </div>
  );
}
