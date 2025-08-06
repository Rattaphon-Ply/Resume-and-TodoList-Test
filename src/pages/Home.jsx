

import HeadAbout from "@/components/home/about me/HeadAbout";
import TitleAbout from "@/components/home/about me/TitleAbout";
import EducationList from "@/components/home/education/EducationList";
import TextMyEducation from "@/components/home/education/TextMyEducation";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import TextMyExp from "@/components/home/experience/TextMyExp";
import Name from "@/components/home/name/Name";
import PictureMe from "@/components/home/PictureMe"
import ProjectSection from "@/components/home/project/ProjectSection";
import TextMyProjects from "@/components/home/project/TextMyProjects";
import Skill from "@/components/home/skills/Skill";
import TextMySkills from "@/components/home/skills/TextMySkills";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen">
        <div className="p-8 flex flex-col justify-center items-center text-center">
          <PictureMe />
          <Name />
        </div>

        <div className="flex flex-col justify-center items-center text-center py-10 px-4 lg:justify-center lg:text-left lg:items-start">
          <HeadAbout />
          <TitleAbout />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        
          <div>
            <TextMyProjects />
            <ProjectSection />
          </div>
          
          <div>
            <TextMyExp />
            <ExperienceSection />
          </div>

        </div>
      </div>

      <div>
        <TextMySkills />
        <Skill/>
      </div>

      <div>
        <TextMyEducation />
        <EducationList />
      </div>
      
    </motion.div>
  )
}
export default Home