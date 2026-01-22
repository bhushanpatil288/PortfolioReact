import "./projectSection.css"
import ProjectCards from "../../common/ProjectCards.jsx"
import { projectsPreview } from "../../../constants/constants";

function ProjectSections() {
  return (
    <section className="mt-30">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center">Projects Showcase</h2>

        <div className="mt-10">

          <ProjectCards projectsPreview={projectsPreview}/>

        </div>
      </div>
    </section>
  );
}

export default ProjectSections;
