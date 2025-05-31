import { educations } from "@/utils/EducationList"
import EducationCard from "./EducationCard"

const EducationList = () => {
  return (
    <div className='relative px-6 pr-6 py-6'>
        <div className="overflow-x-auto whitespace-nowrap scroll-smooth px-2 ">
            <div className="inline-flex gap-10 p-4 px-6">
                {educations.map((proj, i) => (
                    <div key={i} className="shrink-0 w-[300px] object-cover rounded-xl filter brightness transition hover:scale-105 duration-300'">
                        <EducationCard {...proj} />
                    </div>
                ))}
            </div>
        </div>    
    </div>
  )
}
export default EducationList