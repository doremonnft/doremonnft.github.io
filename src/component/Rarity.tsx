import styles from '../css/Unique.module.scss';

function Unique() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>

        <div className={styles.description}>
          <h1>
            Collection
          </h1>
          Each of our Chippies are extremely unique and have their own specialties.
          <br />
          <br />
          Some Chippies are more rare than others and include legendary designs, with four 1/1 NFTs.
          <br />
          <br />
          Chip chip 🐿️🐿️
        </div>
      </div>
      <div className={styles.pic}>
        <img
          src={require("../assets/GalleryDemo.png")}
          width="100%"
          height="100%"
          alt="gallery"
        />
      </div>
    </div>
  );
}

export default Unique;