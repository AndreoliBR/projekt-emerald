import React from 'react';
import styles from './Home.css';

// @TO-DO:
// Add 1024x576, 1280x720 and 1600x900 resolutions
export default function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <h1>Hello, world.</h1>
    </div>
  );
}
