import React from 'react';
import styles from './index.css';

export default function Label(props) {
  return (
    <label className={styles.label}>
      {props.text}
    </label>
  );
}
