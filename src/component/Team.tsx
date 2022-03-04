import styles from '../css/Team.module.scss';

function Member({ imgSrc, role, title }: { imgSrc: string, role: string, title: string }) {
  return (
    <div className={styles.item}>
      <img height={150} className={styles.profilePic} src={imgSrc} alt={title} />
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
          <Member
            imgSrc="Ballz.jpg"
            title="Ballz"
            role="Entrepreneur in Blockchain"
          />
          <Member
            imgSrc="DoreWan-01.jpg"
            title="Nutter"
            role="Product Manager/PhD Student in AI"
          />

          <Member
            imgSrc="Doremi-01.jpg"
            title="Mi"
            role="Artist"
          />
          <Member
            imgSrc="Doremon.jpg"
            title="Monn"
            role="Machine Learning Engineer @Coinbase"
          />

          <Member
            imgSrc="DoreMata-01.jpg"
            title="Mata"
            role="Machine Learning Engineer @Vistaprint"
          />

          <Member
            imgSrc="DoreKofu-01.jpg"
            title="Kofu"
            role="Software Engineer @Snowflake"
          />

          
          <Member
            imgSrc="DoreKiddo-01.jpg"
            title="kiddo"
            role="Software Engineer @LinkedIn"
          />
          <Member
            imgSrc="DoreRinho-01.jpg"
            title="Rinho"
            role="Software Engineer @Snap Inc."
          />
          
        </div>
      </div>

    </div>
  );
}

export default Team;
