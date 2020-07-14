import React, { useEffect } from 'react';
import { remote } from 'electron';
import styles from './LoadingScreen.css';
import OpenScreen from './OpenScreen';

// @TO-DO:
// Add 1024x576, 1280x720 and 1600x900 resolutions
function openSetupAssistant() {
  remote.getCurrentWindow().webContents.on('did-finish-load', () => {
    const assistantWindow = new remote.BrowserWindow({
      width: 1280,
      height: 720,
      frame: false,
      transparent: true,
      fullscreen: false,
      maximizable: false,
      center: true,
      webPreferences: {
        nodeIntegration: true,
      },
      show: false,
    });

    assistantWindow.loadURL(`file://${__dirname}/app.html/setup`);
    assistantWindow.show();

    remote.getCurrentWindow().close();
  });
}

export default function LoadingScreen(): JSX.Element {
  useEffect(() => {
    openSetupAssistant();
  }, []);

  return (
    <div className={styles.home}>
      <OpenScreen />
    </div>
  );
}
