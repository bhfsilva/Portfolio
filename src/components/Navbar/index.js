export default function Navbar() {
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
          padding:0px 80px;
        }
        nav{
          width:560px;
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
      `}</style>
      <img src="assets/img/BH.svg" alt="Logo BH"/>
      <nav>
        <ul>{options.map(opt => (<li key={opt}><a href={`#${opt}`}>{opt}</a></li>))}</ul>
      </nav>  
    </header>
  )
}