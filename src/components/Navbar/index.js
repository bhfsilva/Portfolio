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
          height:40px;
          cursor:pointer;
          transition:0.3s;
        }
        .menuButton div{
          height:6px;
          width:70px;
          border-radius:20px;
          border:1px solid var(--black);
          background-color: var(--black);
          transition:0.3s;
        }
        .menuButton:hover div:nth-child(2){
          width:60px;
        }
        .menuButton:hover div:nth-child(3){
          width:50px;
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
      <button className="menuButton" onClick={() => setShowMenu(!showMenu)}>
        {options.map(opt => <div key={opt}/>)}
      </button>   
    </header>
  )
}