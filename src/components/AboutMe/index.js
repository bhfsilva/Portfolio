import styles from 'src/components/AboutMe/AboutMe.module.css';
export default function AboutMe() {
  return (
    <section id="Sobre mim" className={`${styles.aboutMe} defaultMargin`}>
      <h1>Sobre mim</h1>
      <div>
        <div className={styles.textBox}>
          <p>
            Formado em Técnico em Redes pelo SENAI, comecei a me interessar por desenvolvimento ainda durante o curso quando em uma das disciplinas conheci o shell script.
          </p>
          <p>
            Atualmente estou no 2º semestre para ser tecnólogo em Análise e Desenvolvimento de Sistemas pela faculdade FIAP.
          </p>
          <p>
            Além disso faço cursos extracurriculares em plataformas como: Fundação Estudar, Udemy e Alura.
          </p>
          <div className={styles.downloadBox}>
            <h2>Para mais informações:</h2>
            <a href='#'>
              <img src="assets/img/download.svg"/>
              <p>Baixar currículo</p>
            </a>
          </div>
        </div>
        <img src="assets/img/aboutMe.svg" alt="Drawing of a white man with black hair in a yellow sweater and black pants using the computer"/>
      </div>
    </section>
  )
}
