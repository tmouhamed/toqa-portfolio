import { Navbar } from "./components/navbar/navbar";
import HomePage from "./pages/HomePage/HomePage";
import SkillsPage from "./pages/SkillsPage/skillsPage";
import ProjectsPage from "./pages/ProjectsPage/projectsPage";
import {ContactPage} from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
        <Navbar />
        <HomePage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
    </div>
  );
}

export default App;
