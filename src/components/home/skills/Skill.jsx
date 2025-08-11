import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { Plus } from 'lucide-react';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from 'react-icons/si';
import { SiJavascript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const Skill = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 text-white">
      <li className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2 transform transition duration-300 hover:-translate-y-2 hover:scale-105">
          <SiVite 
            size={70} 
            color="#646CFF" 
            className="rounded-lg"
          />
          <Plus />
          <FaReact 
            size={70} 
            color="#61DAFB" 
            className="rounded-lg"
          />  
        </div>
        <span className="text-center font-bold text-lg">Vite+React</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <SiExpress 
          size={70} 
          className="rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105"
        />
        <span className="text-center font-bold text-lg">Express</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <RiTailwindCssFill 
          size={70} 
          color="#38BDF8" 
          className="rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105"
        />
        <span className="text-center font-bold text-lg">Tailwind CSS</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <FaHtml5 
          size={70} 
          color="#E34F26" 
          className="rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105"
        />
        <span className="text-center font-bold text-lg">HTML</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <SiCss3 
          size={70} 
          style={{ background: 'linear-gradient(45deg, #264DE4, #2965f1)', borderRadius: '0.5rem' }}
          color="#fff"
          className="transform transition duration-300 hover:-translate-y-2 hover:scale-105"
        />
        <span className="text-center font-bold text-lg">CSS</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <SiMysql 
          size={70} 
          color="#00758F"
          className="rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105"
          />
        <span className="text-center font-bold text-lg">MySQL</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <SiJavascript 
          size={70} 
          color="#F7DF1E"
          className="bg-black rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105"
          />
        <span className="text-center font-bold text-lg">JavaScript</span>
      </li>

      <li className="flex flex-col items-center space-y-4">
        <TbBrandCSharp
          size={70} 
          color="#512BD4"
          className="rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105"
          />
        <span className="text-center font-bold text-lg">C#</span>
      </li>
    </ul>
    
  )
}
export default Skill