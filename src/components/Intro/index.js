import styles from './Intro.module.css';
export default function Intro() {
  const info = [
    {
      "socialMedia":"GitHub",
      "username":"bhS1lva",
      "img":"/assets/img/intro/github.svg",
      "link":"https://github.com/bhS1lva?tab=repositories"
    },
    {
      "socialMedia":"Email",
      "username":"bhfs.contato@gmail.com",
      "img":"/assets/img/intro/mail.svg",
      "link":"mailto:bhfs.contato@gmail.com"
    },
    {
      "socialMedia":"Linkedin",
      "username":"Bruno Henrique",
      "img":"/assets/img/intro/linkedin.svg",
      "link":"https://www.linkedin.com/in/bhS1lva/"
    }
  ]
  return (
    <section className={`${styles.introBox}`}>
      <div className={styles.leftBox}>
        <img src="/assets/img/intro/BrunoHenrique.png" alt="Bruno Henrique picture"/>
      </div>
      <div className={styles.rightBox}>
        <h1>Olá, me chamo <b>Bruno Henrique!</b></h1>
        <div className={styles.contentBox}>
          {info.map(info => (
            <a className={styles.info} key={info.socialMedia} href={info.link} target="_blank" rel="noreferrer">
              <img src={info.img} alt={`${info.socialMedia} icon`}/>
              <div>
                <h1>{info.socialMedia}</h1>
                <p>{info.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <a href="#Sobre mim" className={styles.scrollButton}>
        <img src="/assets/img/intro/chevron.svg"/>
      </a>
    </section>
  )
}
