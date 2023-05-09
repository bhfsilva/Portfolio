import styles from './Skills.module.css';
import ListItems from '../../commons/ListItems';
import skills from './skills.json';

export default function Skills() {
  return (
    <section className={`defaultMargin ${styles.content}`} id="Conhecimentos">
      <h1 className="contentTitle">Conhecimentos</h1>  
      <p>Constantemente estudo e realizo projetos para aprimorar meus conhecimentos nas áreas.</p>
      <ListItems source={skills}/>
    </section>
  )
}
