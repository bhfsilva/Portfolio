import { useState } from "react";

export default function Navbar() {
  
  const [showMenu, setShowMenu] = useState(false);

  const options = ['Sobre mim','Conhecimentos','Projetos'];
  return (
    <header>
      <style jsx>{`
        header{
          height:100px;
          background-color:var(--yellow);
          display:flex;
          justify-content:space-between;
          align-items:center;
          position: relative;
          padding:0px 80px;
        }
        .menu{
          width:560px;  
        }
        .menuButton{
          display:none;
          border:none;
          background-color:transparent;
          cursor:pointer;
        }
        .menuButton img{
          width:70px;
        }
        ul{
          display:flex;
          justify-content:space-around;
        }
        li{
          list-style:none;
          font-size:30px;
        }
        a{
          text-decoration:none;
          color:var(--black);
        }
        a:hover{
          text-decoration:underline;
        }
        .show{
          right:0;
        }
      `}</style>
      <img src="assets/img/BH.svg" alt="Logo BH"/>
      <nav className="menu" >
        <ul className={`${showMenu?"show":""}`}>{options.map(opt => (<li key={opt}><a href={`#${opt}`}>{opt}</a></li>))}</ul>  
      </nav>
      <button className="menuButton">
        <img src="assets/img/menu.svg" onClick={() => setShowMenu(!showMenu)}/>
      </button>   
    </header>
  )
}