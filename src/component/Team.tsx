import styles from '../css/Team.module.scss';

function Teammate({ imgSrc, role, title }: { imgSrc: string, role: string, title: string }) {
  return (
    <div className={styles.item}>
      <img height={240} className={styles.profilePic} src={imgSrc} alt={title} />
      <div>
        {title}
      </div>
      <div className={styles.role}>
        {role}
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
            imgSrc="Ballz.jpg"
            title="Ballz"
            role="Entrepreneur in Blockchain"
          />
          <Teammate
            imgSrc="Doremon.jpg"
            title="Monn"
            role="Product Manager @Coinbase"
          />

          <Teammate
            imgSrc="DoreMata-01.jpg"
            title="Mata"
            role="Machine Learning Engineer @Vistaprint"
          />

          <Teammate
            imgSrc="DoreKofu-01.jpg"
            title="Kofu"
            role="Software Engineer @Snowflake"
          />

          <Teammate
            imgSrc="DoreKiddo-01.jpg"
            title="kiddo"
            role="Software Engineer @LinkedIn"
          />
          <Teammate
            imgSrc="DoreRinho-01.jpg"
            title="Rinho"
            role="Software Engineer @Snap Inc."
          />
          <Teammate
            imgSrc="DoreWan-01.jpg"
            title="Nutter"
            role="PHD student in AI"
          />
        </div>
      </div>

    </div>
  );
}

export default Team;
