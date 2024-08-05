import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Blog from './Blog';
import Languages from './Languages';


export default function LandingPage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Experience/>
      <Languages/>
      <Contact/>
      <Blog/>
    </>
  )
}
