import { useState } from "react";
import "./style.css";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <button
        className="theme-btn"
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}
