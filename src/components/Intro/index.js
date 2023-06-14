import SocialMedias from 'src/commons/SocialMedias';
import styles from './Intro.module.css';
export default function Intro({sobreMimID}) {
  return (
    <section className={`${styles.introBox}`}>
      <div className={styles.leftBox}>
        <img src="/assets/img/intro/BrunoHenrique.png" alt="Bruno Henrique picture"/>
      </div>
      <div className={styles.rightBox}>
        <h1>Olá, me chamo <b>Bruno Henrique!</b></h1>
        <SocialMedias/>
      </div>
      <a href={`#${sobreMimID}`} className={styles.scrollButton}>
        <img src="/assets/img/intro/chevron.svg"/>
      </a>
    </section>
  )
}
