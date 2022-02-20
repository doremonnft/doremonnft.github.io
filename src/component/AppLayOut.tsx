import React from 'react';

import styles from '../css/AppLayOut.module.scss';

function AppLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <div className={styles.widthLimit}>
        {children}
      </div>
    </div>
  );
}

export default AppLayout;