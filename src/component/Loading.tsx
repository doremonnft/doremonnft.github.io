import { Grid } from 'antd';
import styles from '../css/Loading.module.scss';

function Loading() {
  const isMobile = Grid.useBreakpoint().xs;
  return (
    <div className={styles.loading}>
      <img
        src="LOGO.png"
        width={isMobile ? 600 : 800}
        alt="chippies nft"
      />
      Loading...
    </div>
  );
}

export default Loading;
