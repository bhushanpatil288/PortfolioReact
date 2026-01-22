"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Example({ project }) {
  console.log(project);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="custom-btn border">
        Details
      </button>

      <Dialog
        open={open}
        onClose={setOpen}
        className="relative z-10 select-none"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative gray-box-shadow border border-2 transform overflow-hidden bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      <p className="text-4xl text-center">{project.name}</p>
                    </DialogTitle>

                    <div>
                      <li key={project.id} className="px-5 py-5 list-none">
                        <div className="px-10 py-10 bg-slate-900 project-card flex flex-col justify-between overflow-hidden">
                          {/* title, img, tags etc */}
                          <div>
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
                          <div className="project-inner-info mt-5 px-5 py-6 rounded-md flex flex-col justify-center">
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
                        </div>
                      </li>
                    </div>

                    <div className="mt-2">
                      <ul className="text-sm text-gray-500 flex flex-col gap-5">
                        <li className="flex gap-3 justify-center">
                          <span>Stack: </span>
                          <ul className="flex gap-2">
                            |
                            {project.stack.map((st, idx) => {
                              return <li key={idx}>{st.toUpperCase()} |</li>;
                            })}
                          </ul>
                        </li>
                        <li className="flex gap-3 text-gray-800 flex-col">
                          <span className="border-b py-2">Highlights </span>
                          <ul className="flex flex-col gap-2 list-disc">
                            {project.highlights.map((hl, idx) => {
                              return <li key={idx}>{hl}</li>;
                            })}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full border border-black justify-center custom-btn !text-white !bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  close
                </button>
                <a target="_blank" href={project.live}>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full border justify-center custom-btn bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Live Site
                  </button>
                </a>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
