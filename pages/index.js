import Navbar from 'src/components/Navbar';
import Intro from 'src/components/Intro';
import AboutMe from 'src/components/AboutMe';
import Skills from 'src/components/Skills';

export default function Home() {
    return(
      <> 
        <Navbar/>
        <Intro/>
        <AboutMe/>
        <Skills/>
      </> 
    )
}