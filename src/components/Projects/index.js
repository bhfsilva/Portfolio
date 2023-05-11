import ListItems from "src/commons/ListItems";
import projects from './projects.json'
import styles from './Projects.module.css';
import { useState } from "react";

export default function Projects() {
  const dynamicFilters = [];

  projects.forEach(project => {
    project.tags.forEach(tag => {
      if(!dynamicFilters.includes(tag)){
        dynamicFilters.push(tag)
      }
    });
  });

  const filters = ['Todos', ...dynamicFilters, 'Mais antigos'];

  const [filteredJSON, setFilteredJSON] = useState(projects);

  const [active, setActive] = useState(0);

  function filterProjects(filter, index){
    setActive(index);
    dynamicFilters.map(dynamicFilter => {
      switch(filter){
        case dynamicFilter:
          return setFilteredJSON([...projects].filter(project => project.tags.includes(filter)));
        case 'Mais antigos':
          return setFilteredJSON([...projects].sort((a, b) => a.releaseDate > b.releaseDate?1:-1));
        default:
          return setFilteredJSON(projects);
      }
    })
  };

  return (
    <section className="defaultMargin" id="Projetos">
      <h1 className="contentTitle">Projetos</h1>
      <div className={styles.filterBox}>
        <h2>Filtros:</h2>
        {filters.map((filter, index) => (
          <button
            key={index}
            className={active === index?`${styles.active}`:''}
            onClick={() => filterProjects(filter, index)}
          >
            {filter}
          </button>
        ))}
      </div>
      <ListItems source={filteredJSON} clickable/>
    </section>
  )
}
