import React from 'react';
import classes from './Button.module.css';
function Button({ text }) {
  return <div className={classes.main}>{text}}</div>;
}

export default Button;
