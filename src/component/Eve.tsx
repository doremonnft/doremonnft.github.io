import React from 'react';
import { Grid } from 'antd';
import Socials from './Socials';

import logo from '../assets/ROBOSbackground(2).png'

import styles from '../css/Eve.module.scss';

function Eve({ description, cta }: {description?: React.ReactNode, cta: React.ReactNode}) {
  const isMobile = Grid.useBreakpoint().xs;
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={logo}
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

export default Eve;
