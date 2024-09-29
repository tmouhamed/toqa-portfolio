import { Navbar } from "./components/navbar/navbar";
import LandingPage from "./pages/landingPage/landingPage";
import SkillsPage from "./pages/skillsPage/skillsPage";
import ProjectsPage from "./pages/projects/projects";

function App() {
  return (
    <div className="App">
        <Navbar />
        <LandingPage />
        <SkillsPage />
        <ProjectsPage />
    </div>
  );
}

export default App;
