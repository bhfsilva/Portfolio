import styles from './AboutMe.module.css';
export default function AboutMe() {
  const date = new Date();
  let age = date.getFullYear() - 2003 - 1;
  date.getMonth()+1 >= 10?age = date.getFullYear() - 2003:age;
  return (
    <section id="Sobre mim" className={`${styles.aboutMe} defaultMargin`}>
      <h1 className="contentTitle">Sobre mim</h1>
      <div>
        <div className={styles.textBox}>
          <p>
            Tenho <b>{age} anos</b>, sou formado em <b>Técnico em Redes</b> pelo <b>SENAI</b> e comecei a me interessar por <b>desenvolvimento</b> ainda durante o curso quando em uma das disciplinas conheci o <b>shell script</b>.
          </p>
          <p>
            Atualmente estou no <b>2º semestre</b> para ser <b>tecnólogo</b> em <b>Análise e Desenvolvimento de Sistemas</b> pela faculdade <b>FIAP</b>.
          </p>
          <p>
            Além disso faço <b>cursos extracurriculares</b> em plataformas como: <b>Fundação Estudar, Udemy e Alura</b>.
          </p>
          <div className={styles.downloadBox}>
            <h2>Para mais informações:</h2>
            <a href='#'>
              <img src="assets/img/aboutMe/download.svg" alt="Download icon"/>
              <p>Baixar currículo</p>
            </a>
          </div>
        </div>
        <img src="assets/img/aboutMe/aboutMe.svg" alt="Drawing of a white man with black hair in a yellow sweater and black pants using the computer"/>
      </div>
    </section>
  )
}
