import { GoArrowUpRight } from "react-icons/go";
import projects from "../utils/projects";

const Projects = () => {
  return (
    <div id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="font-bold uppercase text-slate-200 tracking-widest">Projects</h2>
      </div>

      <div>
        <ol className="group/list">
          {
            projects && projects.length > 0 ? (
              projects.map((project) => (
                <li key={project.id} className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                      <a href={project.link} target="_blank">
                        <h3 className="font-medium text-lg leading-snug text-slate-200 hover:text-teal-300 flex items-center gap-x-2">{project.title} <span><GoArrowUpRight /></span></h3>
                      </a>
                      {
                        project.description.map((detail, index) => <p key={index} className="mt-2 leading-normal">{detail}</p>)
                      }
                      <ul className="mt-2 flex flex-wrap items-center gap-2">
                        {
                          project.skills.map((skill, index) => 
                          <li key={index} className="mr-1.5 mt-2 bg-teal-400/10 px-3 rounded-full py-1 text-xs font-medium text-teal-300 leading-5">{skill}</li>)
                        }
                      </ul>
                    </div>
                    <img src={project.image} alt="Project" width="200" height="48" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" />
                  </div>
                </li>
              ))
            ) : <></>
          }
        </ol>
      </div>
    </div>
  )
}

export default Projects