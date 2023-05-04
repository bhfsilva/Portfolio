import styles from 'src/components/Intro/Intro.module.css';
export default function Intro() {
  const info = [
    {
      "socialMedia":"GitHub",
      "username":"bhS1lva",
      "img":"assets/img/github.svg",
      "link":"https://github.com/bhS1lva?tab=repositories"
    },
    {
      "socialMedia":"Email",
      "username":"bhfs.contato@gmail.com",
      "img":"assets/img/mail.svg",
      "link":"mailto:bhfs.contato@gmail.com"
    },
    {
      "socialMedia":"Linkedin",
      "username":"Bruno Henrique",
      "img":"assets/img/linkedin.svg",
      "link":"https://www.linkedin.com/in/bruno-henrique-902845203/"
    }
  ]
  return (
    <section className={`${styles.introBox}`}>
      <div className={styles.leftBox}>
        <img src="assets/img/BrunoHenrique.png" alt="Bruno Henrique picture"/>
      </div>
      <div className={styles.rightBox}>
        <h1>Olá, me chamo Bruno Henrique!</h1>
        <div className={styles.contentBox}>
          {info.map(info => (
            <a className={styles.info} key={info.socialMedia} href={info.link} target="_blank" rel="noreferrer">
              <img src={info.img}/>
              <div>
                <h1>{info.socialMedia}</h1>
                <p>{info.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
