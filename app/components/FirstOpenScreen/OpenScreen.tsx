import React from 'react';
import styles from './OpenScreen.css';
import Titlebar from './Titlebar';
import AppLogo from './AppLogo/AppLogo.svg';

export default function OpenScreen(): JSX.Element {
  return (
    <div>
      <Titlebar />
      <AppLogo size={145} />
      <h1 className={styles.title}>
        PROJEKT
        <br />
        EMERALD
      </h1>
      <h4 className={styles.loadingString}>Carregando...</h4>
    </div>
  );
}
