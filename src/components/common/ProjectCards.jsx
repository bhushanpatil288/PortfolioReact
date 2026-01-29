import Modal from "./Modal";
import { RiGithubFill, RiLiveFill } from "@remixicon/react";

function ProjectCards({ projectsPreview }) {
  return (
    <>
      <ul className="flex flex-wrap xl:gap-0">
        {projectsPreview.map((project) => {
          return (
            <li key={project.id} className="px-5 py-5 lg:w-1/2 xl:w-1/3">
              <div className="px-10 py-5 bg-slate-900 project-card relative top-deco bot-deco flex flex-col justify-between overflow-hidden">
                {/* title, img, tags etc */}
                <div>
                  {/* title */}
                  <h3 className="font-bold text-2xl text-center py-5">
                    {project.name}
                  </h3>

                  {/* image */}
                  <div className="card-img-container border">
                    <img src={project.img}/>
                  </div>

                  {/* tags */}
                  <ul className="flex gap-5 mt-4 flex-wrap text-xs">
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
                <div className="project-inner-info mt-5 px-5 py-6 rounded-md flex flex-col justify-center">
                  {/* status */}
                  <div className="font-bold mb-5">
                    <span>Status: </span>
                    <span
                      className={`${project.status === "completed" ? "bg-green-700 text-white" : project.status === "in-progress" ? "bg-yellow-300" : "bg-red-400 text-white"} rounded-xl px-3 py-1 border border-black`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-col justify-around">
                    {/* description */}
                    <ul>
                      <li>
                        <span className="text-gray-600 font-bold">
                          Description:{" "}
                        </span>
                        {project.description}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-around mt-5">
                  <a
                    target="_blank"
                    href={project.live}
                    className="custom-btn border border-black !bg-blue-500 !text-white rounded font-bold flex gap-1 justify-center items-center"
                  >
                    <RiLiveFill />
                    <p>Live</p>
                  </a>
                  <Modal project={project} />
                  <a
                    target="_blank"
                    href={project.repo}
                    className="custom-btn border !bg-gray-800 rounded !text-white font-bold flex gap-1 justify-center items-center"
                  >
                    <RiGithubFill />
                    <p>Github</p>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProjectCards;
