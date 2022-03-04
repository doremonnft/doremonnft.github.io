import React from 'react';
import Socials from './Socials';
import styles from '../css/Eve.module.scss';
import logo from "../assets/LOGO.png"

function Eve({ description, cta }: {description?: React.ReactNode, cta: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={logo}
        alt="chippies nft"
      />
      <div className={styles.description}>
        {description}
      </div>
      {cta}
      <Socials />
    </div>
  );
}

export default Eve;
