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

        </div>
    </div>
  );
}

export default Roadmap;
