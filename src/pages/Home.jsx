

import EducationList from "@/components/home/education/EducationList";
import ExperienceSection from "@/components/home/experience/ExperienceSection";
import NameEng from "@/components/home/name/NameEng";
import NameThai from "@/components/home/name/NameThai";
import PictureMe from "@/components/home/PictureMe"
import ProjectSection from "@/components/home/project/ProjectSection";
import Skill from "@/components/home/skills/Skill";


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
            <h2 className="text-2xl font-semibold text-center mb-4">My Projects</h2>
            <ProjectSection />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">My Experiences</h2>
            <ExperienceSection />
          </div>

        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mt-10">My Educations</h1>
        <EducationList />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mt-10">My Skills</h1>
        <Skill/>
      </div>
      
    </div>
  )
}
export default Home