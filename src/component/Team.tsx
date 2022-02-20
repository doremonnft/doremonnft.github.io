import styles from '../css/Team.module.scss';
import creater from '../assets/EVE_CRE.png';
import dev from '../assets/EVE_DEV.png';
import lead from '../assets/EVE_Lead.png';

function Teammate({imgSrc, handle, title}: {imgSrc: string, handle: string, title: string}) {
  return (
    <div className={styles.item}>
      <img height={240} className={styles.profilePic} src={imgSrc} alt={title}/>
      <div>
        <a href={``} target="_blank" rel="noreferrer"><b>{`${handle}`}</b></a>
      </div>
      <div>
        {title}
      </div>
    </div>
  )
}

function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>
          Our Team
        </h1>
        <div className={styles.container}>
          <Teammate
            imgSrc={creater}
            handle=""
            title="Creator"
          />
          <Teammate
            imgSrc={dev}
            handle=""
            title="Lead Developer"
          />
          <Teammate
            imgSrc={lead}
            handle=""
            title="Lead Designer"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
