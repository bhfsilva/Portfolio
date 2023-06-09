import styles from './Footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.Footer}>
      <div>
        <p>&copy; <a href="https://github.com/bhS1lva" target="_blank" rel="noreferrer">Bruno Henrique</a> - {new Date().getFullYear()}</p>
      </div>

      <a href="#">
        to top
      </a>
    </footer>
  )
}
