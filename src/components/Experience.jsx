import { GoArrowUpRight } from "react-icons/go";
import experience from '../utils/experience'

const Experience = () => {
  return (
    <div id="experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="font-bold uppercase text-slate-200 tracking-widest">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {
            experience && experience.length > 0 ? (
              experience.map((exp) => (
                <li key={exp.id} className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase text-slate-500 sm:col-span-2">{exp.date}</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium text-lg leading-snug text-slate-200 hover:text-teal-300 flex items-baseline gap-x-2">{exp.designation} {exp.company && (<span className="text-sm font-normal text-slate-500">• {exp.company}</span>)}</h3>
                      {
                        exp.description.map((detail, index) => (
                          <p key={index} className="mt-2 leading-normal">{detail}</p>
                        ))
                      }
                      <ul className="mt-2 flex flex-wrap items-center">
                        {
                          exp.skills.map((skill, index) => (
                            <li key={index} className="mr-1.5 mt-2 bg-teal-400/10 px-3 rounded-full py-1 text-xs font-medium text-teal-300 leading-5">{skill}</li>
                          ))
                        }
                      </ul>
                    </div>
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

export default Experience