/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { remote } from 'electron';
import styles from './Titlebar.css';

export default function Titlebar(): JSX.Element {
  return (
    <div className={styles.titlebarSafezone}>
      <div className={styles.titlebar}>
        <ul className={styles.actionButtons}>
          <li
            className={styles.closeBtn}
            onClick={() => remote.getCurrentWindow().close()}
          />
          <li
            className={styles.minimizeBtn}
            onClick={() => remote.getCurrentWindow().minimize()}
          />
        </ul>
      </div>
    </div>
  );
}
