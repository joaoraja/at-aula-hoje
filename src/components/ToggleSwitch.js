import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className="toggle-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="toggle-input"
        type="checkbox"
        id="toggle-switch"
      />
      <label className="toggle-label" htmlFor="toggle-switch"></label>
    </div>
  );
};

export default ToggleSwitch;
