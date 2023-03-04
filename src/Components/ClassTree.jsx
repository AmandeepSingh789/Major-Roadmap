import ClassCard from "./ClassCard"
import {AiOutlineArrowRight,AiOutlineArrowDown} from 'react-icons/ai'

const ClassTree = (props) => {
  return (
    <div className='flex justify-content align-center text-[#fff]'>
        <div className="flex flex-col justify-content align-center">
            {/* Div With Qualification Courses */}
            <div className="self-center">
                <h1 className="text-3xl mb-4">Qualification Courses</h1></div>
            

            {/* Start of Div With CSE 20 AND CSE 30 */}
            
            <div className="p-2 flex justify-content align-center">
            <ClassCard
                Code="CSE 20"
                Name ="Beginning Programming in Python"
                Link = "https://courses.soe.ucsc.edu/courses/cse20"
                Level = "2/5"
                PreReqs= "Prerequisite(s):None"
                />

            <div className="text-3xl ml-4 self-center">
            <AiOutlineArrowRight />
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="CSE 30"
                Name ="Programming Abstractions: Python"
                Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-30"
                Level = "3/5"
                PreReqs= "Prerequisite(s): CSE 20 or BME 160; and MATH 3 or MATH 11A or MATH 19A or AM 3 or AM 11A or ECON 11A, or a score of 400 or higher on the mathematics placement examination (MPE)"
                
                />
            </div>
                
            </div>
            {/* End of Div With CSE 20 AND CSE 30 */}

        {/* Start of Div With 19A and 19B */}
        <div className="p-2 flex justify-content align-center">
            <div>
            <ClassCard
            Code="Math 19A"
            Name ="Calculus for Science, Engineering, and Mathematics"
            Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/MATH-Mathematics/Lower-Division/MATH-19A"
            Level = "3/5"
            PreReqs= "Prerequisite(s): MATH 3; or mathematics placement (MP) score of 400 or higher; or AP Calculus AB exam score of 3 or higher."
            />
            </div>
            <div className="text-3xl ml-4 self-center">
            <AiOutlineArrowRight />
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="Math 19B"
                Name ="Calculus for Science, Engineering, and Mathematics"
                Link = "https://ucsc.smartcatalogiq.com/en/current/General-Catalog/Courses/MATH-Mathematics/Lower-Division/MATH-19B"
                Level = "3.5/5"
                PreReqs= "Prerequisite(s): MATH 19A or MATH 20A or AP Calculus AB exam score of 4 or 5, or BC exam score of 3 or higher, or IB Mathematics Higher Level exam score of 5 of higher"
                
                />
            </div>
            
        </div>
        {/* End of Div With 19A and 19B */}
        <div className=" flex flex-col justify-center align-center">
            <div className="ml-[20%] text-3xl"><AiOutlineArrowDown /></div>
            
            <div>
            <ClassCard
            Code="Math 19A"
            Name ="Calculus for Science, Engineering, and Mathematics"
            Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/MATH-Mathematics/Lower-Division/MATH-19A"
            Level = "3/5"
            PreReqs= "Prerequisite(s): MATH 3; or mathematics placement (MP) score of 400 or higher; or AP Calculus AB exam score of 3 or higher."
            />
            </div>
            
            </div>
        {/* Start of Div With 16*/}
        
        </div>
        {/* Div With Qualification Courses */}
        
    </div>
  )
}

export default ClassTree