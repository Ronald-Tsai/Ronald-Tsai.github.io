import React from 'react';
import './DarkModeSwitch.css';

const DarkModeSwitch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
}
  

export default DarkModeSwitch;