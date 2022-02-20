import Pic from '../assets/Rarity.png'
import styles from '../css/Unique.module.scss';
import viewTraits from "../assets/button_assets/ViewTraits.png";

function Unique() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
          
        <div className={styles.description}>
          <h1>
            Uniqueness
          </h1>
          You have the same chance of getting a Corgi or a Shiba Inu, each of them holding a vaccination card uniquely drawn on by Robos.
          <br/>
          <br/>
          Each robos is generated randomly using all the traits, so each robos is unique in their own ways. However, some robos are more unique than others. If you’re lucky, you might get a legendary trait! 
          <br/>
          <br/>
          Traits will be revealed closer to the mint date.
        </div>
        <div className={styles.cta}>
          <img className={styles.button} src={viewTraits}/>
        </div>
      </div>

      <div className={styles.pic}>
        <img
          src={Pic}
          width="100%"
          height="100%"
          alt="nft robos"
        />
      </div>
    </div>
  );
}

export default Unique;