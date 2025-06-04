

import EducationList from "@/components/home/education/EducationList";
import TextMyEducation from "@/components/home/education/TextMyEducation";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import TextMyExp from "@/components/home/experience/TextMyExp";
import NameEng from "@/components/home/name/NameEng";
import NameThai from "@/components/home/name/NameThai";
import PictureMe from "@/components/home/PictureMe"
import ProjectSection from "@/components/home/project/ProjectSection";
import TextMyProjects from "@/components/home/project/TextMyProjects";
import Skill from "@/components/home/skills/Skill";
import TextMySkills from "@/components/home/skills/TextMySkills";


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 animate-fade-in">
      <div className="p-8 flex flex-col justify-center items-center">
        <PictureMe />
        <NameEng />
        <NameThai />
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
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
        <TextMyEducation />
        <EducationList />
      </div>

      <div>
        <TextMySkills />
        <Skill/>
      </div>
      
    </div>
  )
}
export default Home