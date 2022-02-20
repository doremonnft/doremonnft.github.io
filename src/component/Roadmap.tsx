import RoadMap from '../assets/button_assets/RoadMap.png'
import styles from '../css/Roadmap.module.scss';
import tick from "../assets/check.png"

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
        <ul style={{"textAlign":"left"}}>
          <div className='row'>
            <img className={styles.tick} src={tick}/>Private discord channel for members
          </div>

          <div className='row'>
              <img className={styles.tick} src={tick}/>Chance to be an extra in Robo videos (through Zoom or in-person if on location)
          </div>
         
          <div className='row'>
              <img className={styles.tick} src={tick}/>And More!
          </div>
        </ul>
        </div>
        <img src={RoadMap} className={styles.button}/>
      </div>
    </div>
  );
}

export default Roadmap;
