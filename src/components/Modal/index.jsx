import { useState } from "react";
import "./style.css";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="modal-wrapper">
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Title</h2>
            <p>This is a simple modal popup.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
