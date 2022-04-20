import React from 'react';
import styles from '../css/Socials.module.scss';

function Socials() {
  return (
    <div className={styles.container}>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://twitter.com/ChippiesNFT">
          <img
            className={styles.icon}
            src={require("../assets/TwitterChippies(small).png")}
            alt="twitter"
          />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://magiceden.io/">
          <img
            className={styles.icon}
            src={require("../assets/MEChippies(small).png")}
            alt="magiceden"
          />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://discord.gg/wa2SXFCtMx">
          <img
            className={styles.icon}
            src={require("../assets/DiscordChippies(small).png")}
            alt="discord"
          />
        </a>
      </div>
      
    </div>
  );
}

export default Socials;
