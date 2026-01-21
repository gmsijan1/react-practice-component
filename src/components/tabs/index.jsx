import { useState } from "react";
import "./style.css";

export default function Tabs() {
  const tabs = [
    { id: 1, label: "Home", content: "Welcome to the Home tab!" },
    { id: 2, label: "Profile", content: "This is your Profile information." },
    { id: 3, label: "Settings", content: "Adjust your Settings here." },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-panel">
                {tab.content}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
