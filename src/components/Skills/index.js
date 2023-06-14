import ListItems from '../../commons/ListItems';
import skills from './skills.json';

export default function Skills({conhecimentosID}) {
  return (
    <section className="defaultMargin" id={conhecimentosID}>
      <style jsx>{`
        p{
          font-size: 1.5em;
          text-align: justify;
          line-height: 1.5em;
          padding: 40px;
        }
        @media(max-width: 571px){
          p{
            text-align:center;
          }
        }
      `}</style>
      <h1 className="contentTitle">Conhecimentos</h1>  
      <p>Constantemente estudo e realizo projetos para aprimorar meus conhecimentos nas áreas.</p>
      <ListItems source={skills}/>
    </section>
  )
}
