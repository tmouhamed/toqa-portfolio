import { Navbar } from "./components/navbar/navbar";
import LandingPage from "./pages/landingPage/landingPage";
import SkillsPage from "./pages/skillsPage/skillsPage";
import ProjectsPage from "./pages/projectsPage/projectsPage";

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
