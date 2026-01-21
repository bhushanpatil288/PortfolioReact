import { projectsPreview } from "../../../constants/constants";
import "../../../assets/css/main/projectSection.css";
import { ProjectCard } from "../../common/Index.js"

function ProjectSections() {
  return (
    <section className="mt-30">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center">Projects Showcase</h2>

        <div className="mt-10">

          <ProjectCard projectsPreview={projectsPreview}/>

        </div>
      </div>
    </section>
  );
}

export default ProjectSections;
