import AppLayout from './AppLayOut';
import Divider from './Divide';
import Eve from './Eve';
import Roadmap from './Roadmap';
import Rarity from './Rarity';
import Faq from './Faq';
import Team from './Team';
import styles from '../css/Homepage.module.scss';

function Homepage() {
  return (
    <AppLayout>
      <Eve description={
      <>
        <h1>About Us</h1>
        1234 innovative Chippies coming to the Solana ecosystem. 
        <br/>
        <br/>
        Organize and take control of your trading with a unique equipment package! Innovation that excites 🚀
        <br/>
      </>
      }
      cta={
        <div className={styles.cta}>
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
    <Faq/>
    <Divider/>
    </AppLayout>
  );
}

export default Homepage;