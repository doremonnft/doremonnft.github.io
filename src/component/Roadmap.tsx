import styles from '../css/Roadmap.module.scss';

function Roadmap() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
          <h1 className={styles.whitepaper}>
            RoadMap
          </h1>

          <img
            src="ChippiesRoadmap.jpg"
            className={styles.whitepaperImg}
            alt="Roadmap"
          />

          <a href = {require("../assets/ChippieNFT_whitepaper.pdf")} target = "_blank">
            <img className={styles.whitepaperPdf} src="Whitepaper.png" alt="whitepaper"></img>
          
          </a>

        </div>
    </div>
  );
}

export default Roadmap;
