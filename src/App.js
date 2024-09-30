import { Navbar } from "./components/navbar/navbar";
import LandingPage from "./pages/landingPage/landingPage";
import SkillsPage from "./pages/skillsPage/skillsPage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import {ContactPage} from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
        <Navbar />
        <LandingPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
    </div>
  );
}

export default App;
