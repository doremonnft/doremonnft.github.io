import React from 'react';
import styles from '../css/Socials.module.scss';

function Socials() {
  return (
    <div className={styles.container}>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://twitter.com/ChippiesNFT">
          <img
            className={styles.icon}
            src="TwitterChippies(small).png"
            alt="twitter"
          />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://magiceden.io/">
          <img
            className={styles.icon}
            src="MEChippies(small).png"
            alt="magiceden"
          />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://discord.gg/k9bPuzfdmT">
          <img
            className={styles.icon}
            src="DiscordChippies(small).png"
            alt="discord"
          />
        </a>
      </div>
      
    </div>
  );
}

export default Socials;
