import Navbar from 'src/components/Navbar';
import Intro from 'src/components/Intro';
import AboutMe from 'src/components/AboutMe';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';

export default function Home() {
  const navbarIDs = ['sobre-mim', 'conhecimentos', 'projetos', 'contato']
  return(
    <> 
      <Navbar options={navbarIDs}/>
      <Intro sobreMimID={navbarIDs[0]}/>
      <AboutMe sobreMimID={navbarIDs[0]}/>
      <Skills conhecimentosID={navbarIDs[1]}/>
      <Projects projetosID={navbarIDs[2]}/>
      <Contact contatoID={navbarIDs[3]}/>
      <Footer/>
    </> 
  )
}