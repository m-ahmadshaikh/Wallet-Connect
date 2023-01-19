import React from 'react';
import classes from './Button.module.css';
function Button({ text, active, onClick, icon }) {
  return (
    <div
      onClick={onClick}
      className={`${classes.main} ${active ? classes.active : ''}`}>
      {icon}
      {text}
    </div>
  );
}

export default Button;
