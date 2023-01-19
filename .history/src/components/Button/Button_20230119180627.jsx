import React from 'react';
import classes from './Button.module.css';
function Button({ text, active }) {
  return (
    <div className={`${classes.main} ${active ? classes.active : ''}`}>
      {text}
    </div>
  );
}

export default Button;
