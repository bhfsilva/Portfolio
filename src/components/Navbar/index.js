import styles from './Navbar.module.css';
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const options = ['Sobre mim','Conhecimentos','Projetos','Contato'];
  return (
    <header className={styles.header}>
      <img src="/assets/img/navbar/BH.svg" alt="Logo BH"/>
      <nav className={`${styles.menu} ${showMenu?`${styles.show}`:''}`}>
        <ul>
          {options.map(opt => (
            <li key={opt}>
              <a href={`#${opt}`}>{opt}</a>
            </li>
          ))}
        </ul>  
      </nav>
      <button className={styles.menuButton} onClick={() => setShowMenu(!showMenu)}>
        <div/>
        <div/>
        <div/>
      </button>   
    </header>
  )
}