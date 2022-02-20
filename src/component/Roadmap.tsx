import RoadMap from '../assets/button_assets/RoadMap.png'
import styles from '../css/Roadmap.module.scss';

function Roadmap() {
  return (
    <div className={styles.container}>
      <div className={styles.whitepaper}>
        <img
          src=""
          className={styles.whitepaperImg}
          alt="roadmap"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <h1>
            Roadmap
          </h1>
        Minting a Robos acts as your proof of vaccination to enter the Robos Club. As a thank you for supporting Robo channel, you will have access to the following:
        <ul>
          <li>Private discord channel for members</li>
          <li>Chance to be an extra in Robo videos (through Zoom or in-person if on location)</li>
          <li>Early access to new YouTube videos</li>
          <li>And more!</li>
        </ul>
        </div>
        <img src={RoadMap} className={styles.button}/>
      </div>
    </div>
  );
}

export default Roadmap;
