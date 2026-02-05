import React from 'react'
import "./Tabs.css";

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const tabs = [
        { title: "Tab 1", content: "This is the content of Tab 1" },
        { title: "Tab 2", content: "This is the content of Tab 2" },
        { title: "Tab 3", content: "This is the content of Tab 3" },
    ];
  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs;