import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {

  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if(window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      })
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-1/2 lg:justify-between lg:py-[70px]">
      <div>
        <h2 className="text-lg font-medium sm:text-xl leading-normal">Hi! I am</h2>
        <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl tracking-tight">Manju Gurung</h1>
        <h2 className="text-lg font-medium mt-3 text-slate-200 sm:text-xl">Aspiring Frontend Developer</h2>
        <p className="mt-4 text-base max-w-xs leading-normal">I'm dedicated to crafting visually impeccable, captivating, and user-friendly digital experiences.</p>
        <nav className="lg:block hidden">
          <ul className="w-max mt-10 cursor-pointer">
            <a href="#about">
              <li className={`${activeSection === 'about' ? 'active' : ''} flex items-center text-sm py-1 font-bold uppercase hover:text-slate-200 focus-visible:text-slate-200 before:transition-all before:content-[''] before:block before:mr-4 before:w-8 before:h-[2px] before:bg-slate-600 before:bg-opacity-100 hover:before:w-16 hover:before:bg-slate-200 before:focus-visible:w-16 before:focus-visible:bg-slate-200 before:motion-reduce:transition-none`}>About</li>
            </a>
            <a href="#experience">
              <li className={`${activeSection === 'experience' ? 'active' : ''} flex items-center text-sm py-1 font-bold uppercase hover:text-slate-200 focus-visible:text-slate-200 before:transition-all before:content-[''] before:block before:mr-4 before:w-8 before:h-[2px] before:bg-slate-600 before:bg-opacity-100 hover:before:w-16 hover:before:bg-slate-200 before:focus-visible:w-16 before:focus-visible:bg-slate-200 before:motion-reduce:transition-none`}>Experience</li>
            </a>
            <a href="#education">
              <li className={`${activeSection === 'education' ? 'active' : ''} flex items-center text-sm py-1 font-bold uppercase hover:text-slate-200 focus-visible:text-slate-200 before:transition-all before:content-[''] before:block before:mr-4 before:w-8 before:h-[2px] before:bg-slate-600 before:bg-opacity-100 hover:before:w-16 hover:before:bg-slate-200 before:focus-visible:w-16 before:focus-visible:bg-slate-200 before:motion-reduce:transition-none`}>Education</li>
            </a>
            <a href="#skills">
              <li className={`${activeSection === 'skills' ? 'active' : ''} flex items-center text-sm py-1 font-bold uppercase hover:text-slate-200 focus-visible:text-slate-200 before:transition-all before:content-[''] before:block before:mr-4 before:w-8 before:h-[2px] before:bg-slate-600 before:bg-opacity-100 hover:before:w-16 hover:before:bg-slate-200 before:focus-visible:w-16 before:focus-visible:bg-slate-200 before:motion-reduce:transition-none`}>Skills</li>
            </a>
            <a href="#projects">
              <li className={`${activeSection === 'projects' ? 'active' : ''} flex items-center text-sm py-1 font-bold uppercase hover:text-slate-200 focus-visible:text-slate-200 before:transition-all before:content-[''] before:block before:mr-4 before:w-8 before:h-[2px] before:bg-slate-600 before:bg-opacity-100 hover:before:w-16 hover:before:bg-slate-200 before:focus-visible:w-16 before:focus-visible:bg-slate-200 before:motion-reduce:transition-none`}>Projects</li>
            </a>
            <a href="#contact">
              <li className={`${activeSection === 'contact' ? 'active' : ''} flex items-center text-sm py-1 font-bold uppercase hover:text-slate-200 focus-visible:text-slate-200 before:transition-all before:content-[''] before:block before:mr-4 before:w-8 before:h-[2px] before:bg-slate-600 before:bg-opacity-100 hover:before:w-16 hover:before:bg-slate-200 before:focus-visible:w-16 before:focus-visible:bg-slate-200 before:motion-reduce:transition-none`}>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
      <ul className="flex items-center ml-1 mt-8 cursor-pointer">
        <a href="https://github.com/manju0912" target="_blank">
          <li className="mr-5 text-2xl shrink-0 transition-all hover:text-slate-200"><FaGithub /></li>
        </a>
        <a href="https://www.linkedin.com/in/manjugurung0912/" target="_blank">
          <li className="mr-5 text-2xl shrink-0 transition-all hover:text-slate-200"><FaLinkedin /></li>
        </a>
        <a href="https://twitter.com/manju0912" target="_blank">
          <li className="mr-5 text-2xl shrink-0 transition-all hover:text-slate-200"><FaXTwitter /></li>
        </a>
      </ul>
      <div className="flex gap-4">
        <a href="https://drive.google.com/file/d/1Gio_3N8PxpFdWKpu5rZhykBsrnDJg9B6/view?usp=drive_link" target="_blank">
        <button className="flex items-center justify-between gap-x-2 mt-6 px-4 py-2 border border-1 border-slate-500 w-max rounded-md font-medium transition-all hover:text-slate-200 hover:border-slate-200">Résumé <span><GoArrowUpRight /></span></button>
        </a>
        <a href="#contact">
        <button className="flex items-center justify-between gap-x-2 mt-6 px-4 py-2 border border-1 border-slate-200 w-max rounded-md font-medium transition-all text-slate-200 hover:text-teal-300 hover:border-teal-300">Hire Me <span><GoArrowUpRight /></span></button>
        </a>
      </div>
    </header>
  )
}

export default Header