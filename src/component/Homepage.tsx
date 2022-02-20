import AppLayout from './AppLayOut';
import Divider from './Divide';
import Hero from './Hero';
import Roadmap from './Roadmap';
import Rarity from './Rarity';
import Faq from './Faq';
import Team from './Team';
import Footer from './Foot';
import buyButton from '../assets/button_assets/BuyaRobos.png'
import viewGalleryButton from '../assets/button_assets/ViewGallery.png'
import styles from '../css/Homepage.module.scss';

function Homepage() {
  return (
    <AppLayout>
      <Hero description={
      <>
        <h1>About Us</h1>
        Vaxxed Doggos is a collection of 2,500 NFTs created by 
        <br/>
        <br/>
        Half corgis. Half Shibas. Each dog holds a vaccination card hand drawn by Joma and will grant access to future perks including a private discord server for all members.
        <br/>
        <br/>
        These are digital collectibles living on the Solana Blockchain and 100% of proceeds will go into funding YouTube videos.
      </>
      }
      cta={
        <div className={styles.cta}>
          <img className={styles.button} src={buyButton} />
          <img className={styles.button} src={viewGalleryButton}/>
        </div>
      }
    />

    <Divider/>
    <Roadmap/>
    <Divider/>
    <Rarity/>
    <Divider/>
    <Team/>
    <Divider/>
    <Footer/>
    <Divider/>
    <Faq/>
    <Divider/>
    </AppLayout>
  );
}

export default Homepage;