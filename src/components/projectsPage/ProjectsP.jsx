import { allProjects } from "../../constants/constants"
import ProjectCards from "../common/ProjectCards"

function ProjectsP() {
  return (
    <div>
      <section className="mt-30">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center">Projects Showcase</h2>

        <div className="mt-10">
          <ProjectCards projectsPreview={allProjects} />
        </div>
      </div>
    </section>
    </div>
  )
}

export default ProjectsP
