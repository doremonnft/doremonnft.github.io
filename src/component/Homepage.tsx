import AppLayout from './AppLayOut';
import Divider from './Divide';
import Eve from './Eve';
import Roadmap from './Roadmap';
import Rarity from './Rarity';
import Faq from './Faq';
import Team from './Team';
import styles from '../css/Homepage.module.scss';
import DashboardButton from './DashboardButton';

function Homepage() {
  return (
    <AppLayout>
      
      <Eve description={
      <>
        <h1>About Us</h1>
        The youngest chip had an idea, but it was impossible without a team. They gathered their food for the winter and put all of their minds together.
        <br/>
        <br/>
        Together the chips built a family of 1234 other chippies and a shelter that is only going to grow over time. The sky is the limit for us Chippies!
        <br/>
        <br/>
        The Chippies project was founded by a young NFT enthusiast/entrepreneur, an elite PhD AI student, and 5 AI (Artificial Intelligence) and Blockchain concentrated coders who are looking to improve the relationship between AI and the NFT space.        <br/>
      </>
      }
      cta={
        <div className={styles.cta}>
        </div>
      }
    />
    
    <Divider/>
    <DashboardButton />
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