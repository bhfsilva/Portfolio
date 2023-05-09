import styles from './Navbar.module.css';

import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const options = ['Sobre mim','Conhecimentos','Projetos'];
  return (
    <header className={styles.header}>
      <img src="assets/img/navbar/BH.svg" alt="Logo BH"/>
      <nav className={styles.menu}>
        <ul className={`${showMenu?styles.show:''}`}>
          {options.map(opt => (
            <li key={opt}>
              <a href={`#${opt}`}>{opt}</a>
            </li>
          ))}
        </ul>  
      </nav>
      <button className={styles.menuButton} onClick={() => setShowMenu(!showMenu)}>
        {options.map(opt => <div key={opt}/>)}
      </button>   
    </header>
  )
}