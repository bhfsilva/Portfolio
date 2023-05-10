import ListItems from "src/commons/ListItems";
import projects from './projects.json'
import styles from './Projects.module.css';
import { useState } from "react";

export default function Projects() {
  const filters = ['Todos', 'Front-End', 'Back-End', 'Mais novos', 'Mais antigos']

  const [filteredJSON, setFilteredJSON] = useState(projects);

  function teste(filter){
    // setFilteredJSON(projects.filter(project => project.tags.includes(filter)));
    setFilteredJSON(projects.filter(project => {
      
      project.tags.includes(filter)
      switch(filter){
        case 'Front-End':
        case 'Back-End':
          return project.tags.includes(filter);
        default:
          return projects;
      }
    }));
    
  }

  return (
    <section className="defaultMargin" id="Projetos">
      <h1 className="contentTitle">Projetos</h1>
      <div className={styles.filterBox}>
        <h2>Filtros:</h2>
        {filters.map(filter => (
          <button key={filter} onClick={() => teste(filter)}>
            {filter}
          </button>
        ))}
      </div>
      <ListItems source={filteredJSON} clickable/>
    </section>
  )
}
