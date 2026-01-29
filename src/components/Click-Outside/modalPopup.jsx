import { useState } from "react";
import useOnClickOutside from "./clickOutside";
import "./style.css";

export default function ModalPopup() {
  const [open, setOpen] = useState(false);
  const ref = useOnClickOutside(() => setOpen(false));

  return (
    <div className="modal-container">
      <button onClick={() => setOpen(true)} className="open-btn">
        Open Modal
      </button>

      {open && (
        <div ref={ref} className="modal-box">
          <h2>Modal</h2>
          <p>Click outside to close</p>
        </div>
      )}
    </div>
  );
}
