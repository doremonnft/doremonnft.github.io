import styles from '../css/Unique.module.scss';

function Unique() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
          
        <div className={styles.description}>
          <h1>
            Supply
          </h1>
          You have the same chance of getting a Chippie, each of them with a unique role and assets.
          <br/>
          <br/>
          Each chippie is generated randomly using all the traits, so each chippie is unique in their own ways. However, some chippies are more unique than others. If you’re lucky, you might get a legendary trait! 
          <br/>
          <br/>
          Traits will be revealed closer to the mint date.
        </div>
      </div>

      <div className={styles.pic}>
        <img
          src="GalleryDemo.jpg"
          width="100%"
          height="100%"
          alt="gallery"
        />
      </div>
    </div>
  );
}

export default Unique;