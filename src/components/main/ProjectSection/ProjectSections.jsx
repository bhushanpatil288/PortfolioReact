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
                <li key={project.id} className="px-5 xl:w-1/2">
                  <div className="px-10 py-3 bg-slate-900 text-white project-card flex flex-col justify-between overflow-hidden">
                    {/* title, img, tags etc */}
                    <div>
                      {/* title */}
                      <h3 className="font-bold text-2xl text-center py-5">
                        {project.name}
                      </h3>

                      {/* image */}
                      <div className="card-img-container pt-5">
                        <img src={project.img} />
                      </div>

                      {/* tags */}
                      <ul className="flex gap-5 mt-4 flex-wrap">
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
                    <div className="project-inner-info bg-black mt-5 px-5 py-6 rounded-md">
                      {/* status */}
                      <div className="font-bold mb-5">
                        <span>Status: </span>
                        <span
                          className={`${project.status === "completed" ? "bg-green-500 text-black" : project.status === "in-progress" ? "bg-blue-500" : "bg-red-500"} rounded-xl px-3 py-1`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="h-100 flex flex-col justify-around">
                        {/* description */}
                        <ul>
                          <li>
                            <span className="text-amber-500 font-bold">
                              Description:{" "}
                            </span>
                            {project.description}
                          </li>
                        </ul>

                        {/* hightlights */}
                        <div className="bg-cyan-900 px-5 py-5 rounded-md">
                          <h3 className="mb-2">Hightlights: </h3>
                          <ul className="flex flex-col gap-1">
                            {project.highlights.map((highlight, idx) => {
                              return (
                                <li key={idx} className="project-hightlight">
                                  {highlight}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-around mt-5">
                      <a href={project.live} className="bg-blue-500 px-5 py-2 rounded font-bold">Live</a>
                      <a href={project.live} className="bg-green-500 px-5 py-2 rounded text-black font-bold">Github</a>                      
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
