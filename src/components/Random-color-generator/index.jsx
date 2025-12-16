import { useState } from "react";
import "./style.css";

export default function RandomColorRGB() {
  const [color, setColor] = useState("rgb(0,0,0)");

  function generateRGB() {
    let r = Math.floor(Math.random() * 256); //0–255
    let g = Math.floor(Math.random() * 256); //0–255
    let b = Math.floor(Math.random() * 256); //0–255
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <button className="color-btn" onClick={generateRGB}>
        Generate RGB
      </button>
      <p className="color-value">{color}</p>
    </div>
  );
}
