
const Education = () => {
  return (
    <div id="education">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
        <h2 className="font-bold uppercase text-slate-200 tracking-widest">Education</h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase text-slate-500 sm:col-span-2">2015 - 2019</header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-lg leading-snug text-slate-200 hover:text-teal-300 flex items-center gap-x-2">THDC-IHET, Tehri Garhwal</h3>
                <p className="mt-2 leading-normal">B.Tech ( Computer Science & Engineering )</p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase text-slate-500 sm:col-span-2">2012 - 2014</header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-lg leading-snug text-slate-200 hover:text-teal-300 flex items-center gap-x-2">Jawahar Navodaya Vidyalaya</h3>
                <p className="mt-2 leading-normal">Intermediate ( PCM )</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Education