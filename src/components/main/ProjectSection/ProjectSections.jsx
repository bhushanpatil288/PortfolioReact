import { NavLink } from "react-router-dom";

import "./projectSection.css";
import ProjectCards from "../../common/ProjectCards.jsx";
import { projectsPreview } from "../../../constants/constants.js";

function ProjectSections() {
  return (
    <section className="mt-30">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center">Projects Showcase</h2>

        <div className="mt-10">
          <ProjectCards projectsPreview={projectsPreview} />

          <div className="text-center mt-5">
            <NavLink to="/projects">
              <button className="custom-btn !bg-gray-800 !text-white">
                Explore More Projects
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSections;
