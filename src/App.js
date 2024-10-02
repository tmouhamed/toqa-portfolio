import { Navbar } from "./components/navbar/navbar";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/skillsPage";
import ProjectsPage from "./pages/ProjectsPage/projectsPage";
import {ContactPage} from "./pages/ContactPage/ContactPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
/* My name: Toqa Mouhamed
StudentID: 301479591
date: OCT 1st, 2024
Github: https://github.com/tmouhamed/toqa-portfolio
Live Portfolio: https://toqa-portfolio-408312dc8622.herokuapp.com/  */


function App() {
  return (
    <div className="App">
        <Navbar />
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
    </div>
  );
}

export default App;
