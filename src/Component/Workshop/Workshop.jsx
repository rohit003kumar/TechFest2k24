import React from 'react'
import styles from './Workshop.module.css';

const Workshop = () => {
  return (
    <div className={styles['workshop-container']}>
      <h2 className={styles.soon} data-text="Coming_Soon...">Coming_Soon...</h2>
    </div>
  );
};

export default Workshop;
