export default function Intro() {
  const info = [
    {
      "socialMedia":"GitHub",
      "username":"bhS1lva",
      "img":"assets/img/github.svg",
      "link":"https://github.com/bhS1lva?tab=repositories"
    },
    {
      "socialMedia":"Email",
      "username":"bhfs.contato@gmail.com",
      "img":"assets/img/mail.svg",
      "link":"mailto:bhfs.contato@gmail.com"
    },
    {
      "socialMedia":"Linkedin",
      "username":"Bruno Henrique",
      "img":"assets/img/linkedin.svg",
      "link":"https://www.linkedin.com/in/bruno-henrique-902845203/"
    }
  ]
  return (
    <div className="box">
      <style jsx>{`
        .box{
          display:flex;
          justify-content:space-around;
          align-items:center;
          flex-flow:row wrap;
          height:80vh;
          padding: 0px 70px;
        }
        .left-box{
          display:flex;
          justify-content:center;
          height:27rem; 
          width:30%;
        }
        .right-box{
          display:flex;
          flex-flow:column;
          justify-content:space-evenly;
          align-items:center;
          text-align:center;
          flex-basis:fit-content;
          height:70%;
        }
        .left-box img{
          filter:brightness(1.2);
          width:100%;
          object-fit:contain;
        }
        .right-box > h1{
          font-size:3.5rem;
          font-weight:normal;
        }
        .right-inner-box{
          width:100%;
          display:flex;
          justify-content:space-around;
          align-items:center;
          flex-basis: fit-content;
        }
        .info{
          height:80%;
          display:flex;
          flex-flow:column;
          justify-content:center;
          align-items:center;
        }
        .info img{
          width:7em;
        }
        .info a{
          text-decoration:none;
          color:var(--black);
          transition:0.3s;
        }
        .info a:hover{
          filter:invert(80%) sepia(80%) saturate(268%) brightness(95%) contrast(91%);
        }
        .info h1{
          font-size:2.3rem;
        }
        .info p{
          color:#B8B8B8;
          font-size:1.8rem;
        }
      `}</style>
      <div className="left-box">
        <img src="assets/img/BrunoHenrique.png" alt="Bruno Henrique picture"/>
      </div>
      <div className="right-box">
        <h1>Olá, me chamo Bruno Henrique!</h1>
        <div className="right-inner-box">
          {info.map(info => (
            <div className="info" key={info.socialMedia}>
              <a href={info.link} target="_blank" rel="noreferrer">
                <img src={info.img}/>
                <h1>{info.socialMedia}</h1>
              </a>
              <p>{info.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
