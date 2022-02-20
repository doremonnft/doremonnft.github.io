import React from 'react';
import twitterLogo from '../assets/twitter.png';
import discordLogo from '../assets/discord.png';
import styles from '../css/Socials.module.scss';

function Socials() {
  return (
    <div className={styles.container}>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="">
          <img
            className={styles.icon}
            src={twitterLogo}
            alt="twitter logo"
          />
          <b>@Robos</b>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="">
          <img
            className={styles.icon}
            src={discordLogo}
            alt="discord logo"
          />
          <b>@Robos</b>
        </a>
      </div>
    </div>
  );
}

export default Socials;
