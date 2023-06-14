import styles from './Navbar.module.css';
import { useState } from "react";

export default function Navbar({options}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.header}>
      <img src="/assets/img/navbar/BH.svg" alt="Logo BH"/>
      <nav className={`${styles.menu} ${showMenu?`${styles.show}`:''}`}>
        <ul>
          {options.map(opt => (
            <li key={opt} onClick={() => setShowMenu(false)}>
              <a href={`#${opt}`}>{opt.replace('-',' ')}</a>
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