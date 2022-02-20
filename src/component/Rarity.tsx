import rarity from '../assets/Rarity.png'
import styles from '../css/Rarity.module.scss';
import viewTraits from "../assets/button_assets/ViewTraits.png";
import viewGallery from '../assets/button_assets/ViewGallery.png';

function Rarity() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
          
        <div className={styles.description}>
          <h1>
            Rarity
          </h1>
          You have the same chance of getting a Corgi or a Shiba Inu, each of them holding a vaccination card uniquely drawn on by Joma.
          <br/>
          <br/>
          Each doggo is generated randomly using all the traits, so each doggo is unique in their own ways. However, some doggos are more unique than others. If you’re lucky, you might get a legendary trait! 
          <br/>
          <br/>
          Traits will be revealed closer to the mint date.
        </div>
        <div className={styles.cta}>
          <img className={styles.button} src={viewTraits}/>
          <img className={styles.button} src={viewGallery}/>
        </div>
      </div>

      <div className={styles.pic}>
        <img
          src={rarity}
          width="100%"
          height="80%%"
          alt="nft robos"
        />
      </div>
    </div>
  );
}

export default Rarity;