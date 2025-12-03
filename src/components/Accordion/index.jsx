import { useState } from "react";
import "./style.css";

const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library used to build user interfaces.",
  },
  {
    id: 2,
    question: "What is an Accordion?",
    answer: "It is a UI pattern where content is shown or hidden when clicked.",
  },
  {
    id: 3,
    question: "Can I reuse this component?",
    answer: "Yes! Just change the data array.",
  },
];

export default function App() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container">
      <h1>FAQ Accordion</h1>

      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <button
              className="accordion-title"
              onClick={() => toggleItem(item.id)}
            >
              {item.question}
              <span>{openId === item.id ? "−" : "+"}</span>
            </button>

            {openId === item.id && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
