import styles from '../css/Team.module.scss';

function Teammate({imgSrc, handle, title}: {imgSrc: string, handle: string, title: string}) {
  return (
    <div className={styles.item}>
      <img height={240} className={styles.profilePic} src={imgSrc} alt={title}/>
      <div>
        <a href={``} target="_blank" rel="noreferrer"><b>{`@${handle}`}</b></a>
      </div>
      <div>
        {title}
      </div>
    </div>
  )
}

function Team() {
  return (
    <div className={styles.description}>
      <h1>
        Our Team
      </h1>
      <div className={styles.container}>
        <Teammate
          imgSrc=""
          handle=""
          title="Creator"
        />
        <Teammate
          imgSrc="g"
          handle=""
          title="Lead Developer"
        />
        <Teammate
          imgSrc=""
          handle=""
          title="Lead Designer"
        />
      </div>
    </div>
  );
}

export default Team;
