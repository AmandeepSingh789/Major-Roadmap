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
                Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-20"
                Level = "2/5"
                PreReqs= "Prerequisite(s):None"
                GE ="General Education Code: MF"
                QO="Quarter Offered: Fall, Winter, Spring"
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
                QO="Quarter Offered: Fall, Winter, Spring"
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
            GE ="General Education Code: MF"
            QO="Quarter Offered: Fall, Winter, Spring, Summer"
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
                GE ="General Education Code: MF"
                QO="Quarter Offered: Fall, Winter, Spring, Summer"
                />
            </div>
            
        </div>
        {/* End of Div With 19A and 19B */}

        {/* Start of Div With 16 and AM -30*/}
        <div className=" flex flex-col justify-center align-center ">
            <div className=" flex justify-content align-center mb-4 mt-12 ">
                
                <div className="text-3xl ml-[20%]"><AiOutlineArrowDown /></div>
                <div className="text-3xl ml-[50%]"><AiOutlineArrowDown /></div>
                
                </div>
            
            <div className="flex justify-start align-center">
            
            <div>
            <ClassCard
            Code="CSE 16"
            Name ="Applied Discrete Mathematics"
            Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-16"
            Level = "3/5"
            PreReqs= "Prerequisite(s): MATH 19A or MATH 19B or MATH 11B or AM 11B or AM 15B or ECON 11B."
            GE ="General Education Code: MF"
            QO="Quarter Offered: Fall, Winter, Spring"
            />
            </div>


            <div className ="ml-16">
            <ClassCard
            Code="AM 30  "
            Name ="Multivariate Calculus for
            Engineers"
            Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/AM-Applied-Mathematics/Lower-Division/AM-30"
            Level = "3.5/5  "
            PreReqs= "Prerequisite(s): AM 10; MATH 19B or MATH 20B."
            QO="Quarter Offered: Fall, Spring"
            />
            </div>

            </div>
            
            </div>
        {/* End of Div With 16 and AM 30*/}

        {/* Start of Div With Math 23A */}
        <div className=" flex flex-col justify-center align-center ">
            <div className=" flex justify-content align-center mt-4">
                
                
                <div className="text-3xl ml-[75%]">OR</div>
                
                </div>
            
            <div className="flex justify-end align-center">

            <div className ="ml-16 mt-4">
            <ClassCard
            Code="MATH 23A"
            Name ="Vector Calculus"
            Link = "https://ucsc.smartcatalogiq.com/en/Current/General-Catalog/Courses/MATH-Mathematics/Lower-Division/MATH-23A"
            Level = "3.5/5  "
            PreReqs= "Prerequisite(s): MATH 19B or MATH 20B or AP calculus BC exam score of 4 or 5."
            QO="Quarter Offered: Fall, Winter, Spring, Summer"
            />
            </div>

            </div>
            
            </div>

            {/* End of Div With Math 23A */}
        
        </div>
        {/* Div With Qualification Courses */}
        
    </div>
  )
}

export default ClassTree