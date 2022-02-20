import React from 'react';
import { Grid } from 'antd';
import Socials from './Socials';

import logo from '../assets/ROBOSbackground(2).png'

import styles from '../css/Hero.module.scss';

function Hero({ description, cta }: {description?: React.ReactNode, cta: React.ReactNode}) {
  const isMobile = Grid.useBreakpoint().xs;
  return (
    <div className={styles.container}>
      <img
        src={logo}
        width={isMobile ? 600 : 800}
        alt="Robos nft"
      />
      <div className={styles.description}>
        {description}
      </div>
      {cta}
      <Socials />
    </div>
  );
}

export default Hero;
