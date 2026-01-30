import React from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  const handleToggle = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <div className="toggleContainer">
      <span className="toggleText">Status : {isToggled ? "ON" : "OFF"}</span>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
