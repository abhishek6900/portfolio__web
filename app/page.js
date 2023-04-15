import Link from "next/link"
import styles from './styles/styles.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from "./sections/About.jsx"
import Skills from "./sections/Skills.jsx"
import Experience from "./sections/Experience.jsx"
import Projects from "./sections/Projects.jsx"
import Footer from "./components/Footer.jsx"

const page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />,
      <Hero />,
      <About />,
      <Skills />,
      <Experience />,
      <Projects/>,
      <Footer/>,
  

    </div>

    
 
  )
}

export default page