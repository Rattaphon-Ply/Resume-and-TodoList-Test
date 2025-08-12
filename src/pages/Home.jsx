import HeadAbout from "@/components/home/about me/HeadAbout";
import TitleAbout from "@/components/home/about me/TitleAbout";
import EducationList from "@/components/home/education/EducationList";
import TextMyEducation from "@/components/home/education/TextMyEducation";
import ExperiencesAnimate from "@/components/home/experience/ExperiencesAnimate";
import TextMyExp from "@/components/home/experience/TextMyExp";
import Name from "@/components/home/name/Name";
import PictureMe from "@/components/home/PictureMe"
import Projects from "@/components/home/project/Projects";
import TextMyProjects from "@/components/home/project/TextMyProjects";
import Skill from "@/components/home/skills/Skill";
import TextMySkills from "@/components/home/skills/TextMySkills";
import { motion } from "framer-motion";
import FadeContent from "@/components/animate-fade/FadeContent";
import AnimatedContent from "@/components/animate-fade/AnimatedContent";


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <motion.section 
        id="me" 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen scroll-mt-96"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="p-8 flex flex-col justify-center items-center text-center">
          <PictureMe />
          <Name />
        </div>

        <div className="flex flex-col justify-center items-center text-center py-10 px-4 lg:justify-center lg:text-left lg:items-start">
          <HeadAbout />
          <TitleAbout />
        </div>
      </motion.section>

      
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <section id="project" className="min-h-screen scroll-mt-20 p-8">
          <div className="max-w-6xl mx-auto">
            <TextMyProjects />
            <Projects />
          </div>
        </section>
      </FadeContent>

      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        duration={1.9}
        ease="bounce.out"
        initialOpacity={0}
        animateOpacity
        scale={1.8}
        threshold={0.1}
        delay={0.3}
      >
        <section id="exp" className="min-h-screen scroll-mt-20 flex flex-col items-center justify-center">
          <TextMyExp />
          <ExperiencesAnimate />
        </section>
      </AnimatedContent>

      <motion.section id="skill" className="min-h-screen scroll-mt-20 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          <TextMySkills />
          <Skill/>
        </div>
      </motion.section>

      <section id="education" className="scroll-mt-20">
        <TextMyEducation />
        <EducationList />
      </section>
      
    </div>
  )
}
export default Home