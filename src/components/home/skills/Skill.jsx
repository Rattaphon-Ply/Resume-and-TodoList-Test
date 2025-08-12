import { skills } from "@/utils/SkillsList"

const Skill = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 p-10 text-white">
      {skills.map(({Icon, color, label})=>(
        
        <li key={label} className="flex flex-col items-center space-y-4">
          <Icon size={70} color={color} className="transform transition duration-300 hover:scale-110" />
          <span className="text-center font-bold text-lg text-white">{label}</span>
        </li>
      ))

      }
    </ul>

    
    
  )
}
export default Skill