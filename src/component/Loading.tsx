import { Grid } from 'antd';
import logo from "../assets/ROBOSbackground.png";
import styles from '../css/Loading.module.scss';

function Loading() {
  const isMobile = Grid.useBreakpoint().xs;
  return (
    <div className={styles.loading}>
      <img
        src={logo}
        width={isMobile ? 600 : 800}
        alt="Robos nft"
      />
      Loading...
    </div>
  );
}

export default Loading;
