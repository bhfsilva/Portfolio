import styles from './Footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div>
        <p>&copy; <a href="https://github.com/bhS1lva" target="_blank" rel="noreferrer">Bruno Henrique</a> - {new Date().getFullYear()}</p>
      </div>
      <a href="#" className={styles.toTop}>
        <img src="/assets/img/intro/chevron.svg"/>
      </a>
    </footer>
  )
}
