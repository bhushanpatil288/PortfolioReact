import { projectsPreview } from "../../../constants/constants";
import "../../../assets/css/main/projectSection.css";

function ProjectSections() {
  return (
    <section className="mt-30">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center">Projects Showcase</h2>

        <div className="mt-10">
          <ul className="flex flex-wrap gap-5 xl:gap-0">
            {projectsPreview.map((project) => {
              return (
                <li key={project.id} className="px-5 xl:w-1/3">
                  <div className="px-10 py-3 bg-slate-900 project-card flex flex-col justify-between overflow-hidden">
                    {/* title, img, tags etc */}
                    <div>
                      {/* title */}
                      <h3 className="font-bold text-2xl text-center py-5">
                        {project.name}
                      </h3>

                      {/* image */}
                      <div className="card-img-container border">
                        <img src={project.img} />
                      </div>

                      {/* tags */}
                      <ul className="flex gap-5 mt-4 flex-wrap text-sm">
                        {project.tags.map((tag, idx) => {
                          return (
                            <li key={idx} className="project-tag">
                              #{tag}
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* detailed info */}
                    <div className="project-inner-info mt-5 px-5 py-6 rounded-md">
                      {/* status */}
                      <div className="font-bold mb-5">
                        <span>Status: </span>
                        <span
                          className={`${project.status === "completed" ? "bg-green-500 text-black" : project.status === "in-progress" ? "bg-blue-500 text-white" : "bg-red-500 text-white"} rounded-xl px-3 py-1 border border-black`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="flex flex-col justify-around">
                        {/* description */}
                        <ul>
                          <li>
                            <span className="text-amber-500 font-bold">
                              Description:{" "}
                            </span>
                            {project.description}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-around mt-5">
                      <a href={project.live} className="custom-btn border border-black !bg-blue-500 !text-white px-5 py-2 rounded font-bold">Live</a>
                      <a href={project.live} className="custom-btn border px-5 py-2 rounded font-bold">Details</a>
                      <a href={project.repo} className="custom-btn border !bg-green-500 px-5 py-2 rounded text-black font-bold">Github</a>                      
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectSections;
