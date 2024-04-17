import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <About />
      </section>
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <Experience />
      </section>
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <Education />
      </section>
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <Skills />
      </section>
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <Projects />
      </section>
      <Footer />
    </main>
  )
}

export default Main