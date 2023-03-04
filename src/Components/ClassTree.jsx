import ClassCard from "./ClassCard"
import {AiOutlineArrowRight,AiOutlineArrowDown} from 'react-icons/ai'
import Divider from '@mui/material/Divider';
import UpperDivCard from './UpperDivCard'
import CapstoneCard from './CapstoneCard'

const ClassTree = (props) => {
  return (
    <div className='flex justify-content align-center text-[#fff] w-[740px]'>
        <div className="flex flex-col justify-content align-center">
            {/* Div With Qualification Courses */}
            <div className="self-center">
                <h1 className="text-3xl mb-4">Qualification Courses</h1></div>

            {/* Start of Div With CSE 20 AND CSE 30 */}
            
            <div className="p-2 flex justify-content align-center mb-4">
            <ClassCard
                Code="CSE 20"
                Name ="Beginning Programming in Python"
                Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-20"
                Level = {2}
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
                Level = {3}
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
            Level = "3"
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
                Level = "3.5"
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
            Level = "3"
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
            Level = "3.5  "
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
                
                
                <div className="text-3xl ml-[72%]">OR</div>
                
                </div>
            
            <div className="flex justify-end align-center">

            <div className ="mt-4 mr-8">
            <ClassCard
            Code="MATH 23A"
            Name ="Vector Calculus"
            Link = "https://ucsc.smartcatalogiq.com/en/Current/General-Catalog/Courses/MATH-Mathematics/Lower-Division/MATH-23A"
            Level = "3.5  "
            PreReqs= "Prerequisite(s): MATH 19B or MATH 20B or AP calculus BC exam score of 4 or 5."
            QO="Quarter Offered: Fall, Winter, Spring, Summer"
            />
            </div>

            </div>
            
            </div>

            {/* End of Div With Math 23A */}


            {/* Start of Div With CSE 12 AND CSE 13 */}
            
            <div className="p-2 flex justify-content align-center mt-12 mb-4">
            <ClassCard
                Code="CSE12"
                Name ="Computer Systems and Assembly Language"
                Link = "https://ucsc.smartcatalogiq.com/2019-2020/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-12"
                Level = "4"
                PreReqs= "Prerequisite(s): previous or concurrent enrollment in CSE 12L is required."
                QO="Quarter Offered: Fall, Winter, Spring, Summer"
                />

            <div className="text-3xl ml-4 self-center">
            <AiOutlineArrowRight />
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="CSE 13"
                Name ="Computer Systems and C Programming"
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-13S"
                Level = "4.5"
                PreReqs= "Prerequisite(s): CSE 12 or BME 160"
                QO="Quarter Offered: Fall, Winter, Spring"
                />
            </div>
                
            </div>
            {/* End of Div With CSE 20 AND CSE 30 */}
            <Divider color="#66FCF1"/>
            <div className="self-center mt-12">
    
                <h1 className="text-3xl mb-4">Upper Division </h1></div>

            {/* Start of CSE 101 and CSE 120*/}

            <div className="p-2 flex justify-between align-center">
            
            <ClassCard
                Code="CSE101"
                Name ="Introduction to Data Structures and Algorithms"
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-101"
                Level = "4"
                PreReqs= "Prerequisite(s): CSE 12 or BME 160; CSE 13E or ECE 13 or CSE 13S; and CSE 16; and CSE 30; and MATH 11B or MATH 19B or MATH 20B or AM 11B"
                QO="Quarter Offered: Fall, Winter, Spring"
                />

            <div className ="ml-4">

            <ClassCard
            Code="CSE 120"
            Name ="Computer Architecture"
            Link = "https://ucsc.smartcatalogiq.com/2019-2020/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-120"
            Level = "3.5"
            PreReqs= "Prerequisite(s): CSE 12 and CSE 12L; and CSE 13E or CSE 13S or CSE 11 or CSE 14 and CSE 14L. CSE 16 recommended"
            QO="Quarter Offered: Fall, Winter, Spring"
            />
            </div>
                
            </div>
            {/* End of CSE 101 and CSE 120*/}

        {/* Start of CSE 103 and 102 */}

            <div className=" flex flex-col justify-center align-center ">
            <div className=" flex justify-center align-center mb-4 mt-12 ">
                
                <div className="text-3xl"><AiOutlineArrowDown /></div>
                
                </div>
            
            <div className="flex justify-start align-center">


            <div >
            <ClassCard
            Code="CSE 102 "
            Name ="Introduction to Analysis of Algorithms
            "
            Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-102"
            Level = "4.5  "
            PreReqs= "Prerequisite(s): CSE 101."
            QO="Quarter Offered: Fall, Winter, Spring"
            />
            </div>

            <div className ="ml-16">
            <ClassCard
            Code="CSE 103"
            Name ="Computational Models"
            Link = "https://ucsc.smartcatalogiq.com/en/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-103"
            Level = "4.5"
            PreReqs= "Prerequisite(s): CSE 101."
            QO="Quarter Offered: Fall, Winter, Spring"
            />
            </div>

            </div>
            
            </div>
            {/* End of CSE 102 and CSE 103 */}
            

            {/* Start of CSE 112 and 114 */}

            <div className="p-2 flex justify-content align-center mt-12">
            <ClassCard
                Code="CSE 112"
                Name ="Comparative Programming Languages"
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-112"
                Level = "3.5"
                PreReqs= "Prerequisite(s): CSE 101."
                />

            <div className="text-3xl ml-4 self-center">
            OR
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="CSE 114"
                Name ="Foundations of Programming Languages"
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-114A"
                Level = "3.5"
                PreReqs= "Prerequisite(s): CSE 101."
                QO="Quarter Offered: Fall, Winter, Spring"
                />
            </div>
                
            </div>
            {/* End of CSE 112 and CSE 114 */}

            {/* Start of CSE 116 */}
            <div className=" flex flex-col justify-center align-center ">
            <div className=" flex justify-center align-center mt-4">
                
                
                <div className="text-3xl ">OR</div>
                
                </div>
            
            <div className="flex justify-center align-center">

            <div className =" mt-4">
            <ClassCard
            Code="CSE 116"
            Name ="Introduction to Functional Programming"
            Link = "https://ucsc.smartcatalogiq.com/en/2019-2020/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-116"
            Level = "3.5  "
            PreReqs= "Prerequisite(s): CMPS 101 or CSE 101."
            QO="Quarter Offered: Fall"
            />
            </div>
            </div>
            </div>
            
            {/* End of CSE 116 */}


            {/* Start of CSE 130 and 131 */}

            <div className="p-2 flex justify-content align-center mt-12">
            <ClassCard
                Code="CSE 130"
                Name ="Principles of Computer Systems Design"
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-130"
                Level = "4.5"
                PreReqs= "Prerequisite(s): CSE 12; and CSE 101, or CSE 15 and CSE 15L; and knowledge of C programming language."
                QO="Quarter Offered: Fall, Winter, Spring"
                />

            <div className="text-3xl ml-4 self-center">
            OR
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="CSE 131"
                Name ="Introduction to Operating Systems
                "
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-114A"
                Level = "4.5"
                PreReqs= "Prerequisite(s): CSE 101 and CSE 120"
                />
            </div>
                
            </div>
            {/* End of CSE 130 and 131 */}


            {/* Start of CSE 107 and Stat 131 */}

            <div className="p-2 flex justify-content align-center mt-12 mb-4">
            <ClassCard
                Code="CSE 107"
                Name ="Probability and Statistics for Engineers"
                Link = "https://ucsc.smartcatalogiq.com/en/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-107"
                Level = "3"
                PreReqs= "Prerequisite(s): CSE 16; and AM 30 or MATH 22 or MATH 23A."
                QO="Quarter Offered: Fall, Winter, Spring"
                GE = "SR"
                />

            <div className="text-3xl ml-4 self-center">
            OR
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="STAT 131"
                Name ="Introduction to Probability Theory
                "
                Link = "https://ucsc.smartcatalogiq.com/en/Current/General-Catalog/Courses/STAT-Statistics/Upper-Division/STAT-131"
                Level = "3"
                PreReqs= "Prerequisite(s): AM 11B or ECON 11B or MATH 11B or MATH 19B or MATH 20B."
                GE="SR"
                QO="Quarter Offered: Fall, Winter, Spring, Summer"
                />
            </div>
                
            </div>
            {/* End of CSE 107 and Stat 131 */}
        {/* Divider */}
        <Divider color="#66FCF1"/>
            <div className="self-center mt-12">
                
                <h1 className="text-3xl mb-4">Disciplinary Communication Requirement (DC)</h1>
                <p className="text-md mb-4">Students of every major must satisfy that major's upper-division Disciplinary Communication (DC) Requirement. </p>
            </div>
            

            {/* Start of CSE 115A and CSE 185 */}

            <div className="p-2 flex justify-content align-center mt-12">
            <ClassCard
                Code="CSE 115A"
                Name ="Introduction to Software Engineering"
                Link = "https://ucsc.smartcatalogiq.com/current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-115A"
                Level = "3.5"
                PreReqs= "Prerequisite(s): satisfaction of the Entry Level Writing and Composition requirements and CSE 101 and CSE 130."
                QO= "Fall, Winter, Spring"
                />

            <div className="text-3xl ml-4 self-center">
            OR
            </div>

            <div className ="ml-4">
            
            <ClassCard
                Code="CSE 185"
                Name ="Technical Writing for Computer Science and Engineering"
                Link = "https://ucsc.smartcatalogiq.com/Current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-185E"
                Level = "3.5"
                PreReqs= "Prerequisite(s): satisfaction of Entry Level Writing and Composition requirements; and CSE 12 or CSE 15 or CSE 30 or BME 160 or by permission of the instructor. Enrollment is restricted to computer engineering, bioengineering, bioinformatics, biomolecular engineering and bioinformatics, or network and digital technology majors."
                QO="Quarter Offered: Fall, Winter, Spring"
                />
            </div>
                
            </div>
            {/* End of CSE 115A and CSE 185 */}

            {/* Start of CSE 195 */}
            <div className=" flex flex-col justify-center align-center mb-8 ">
            <div className=" flex justify-center align-center mt-4">
                
                
                <div className="text-3xl ">OR</div>
                
                </div>
            
            <div className="flex justify-center align-center">

            <div className =" mt-4">
            <ClassCard
            Code="CSE 195"
            Name ="Senior Thesis Research"
            Link = "https://ucsc.smartcatalogiq.com/en/current/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Upper-Division/CSE-195"
            Level = "4 "
            PreReqs= " Prerequisite(s): satisfaction of the Entry Level Writing and Composition requirements. Computer Engineering majors, CSE 123A or CSE 129A."
            QO="Quarter Offered: Fall, Winter, Spring"
            />
            </div>
            </div>
            </div>
            
            {/* End of CSE 195 */}
            <Divider color="#66FCF1"/>
            <div className="self-center mt-12 mb-8">
                
                <h1 className="text-3xl mb-4 "> Important Note.</h1>
                <p className="text-md mb-4">The capstone course can count toward 1 of the 4 required upper division electives. </p>

                <p className="text-md mb-4">
                CSE 195 can satisfy the DC requirement OR an Upper Division Elective, but NOT both
                </p>
            </div>

            <Divider color="#66FCF1"/>

            <div className="self-center mt-12 mb-8">
                <h1 className="text-3xl mb-4 ">Upper Division Electives</h1>
                <p className="text-md mb-4">5 credit (or more than 5 credit) upper-division computer science or computer engineering (CSE) courses with
a course number below 170, or between 180-189, or CSE 195, or some courses from the Computational Media electives. Up to two of these electives may be replaced by some upper-division mathematics electives. </p>

                <p className="text-md ">
                Courses from the
Disciplinary Communication list cannot also be used to satisfy an Upper Division Elective
                </p>
                
            </div>

            {/* Start of Upper Div Cards */}
            <div className="p-2 flex justify-around align-center mt-12">
            <UpperDivCard 
            upper = {true} />
            

            <div className ="ml-4">
            
            <UpperDivCard  upper = {true} />
            </div>
                
            </div>

             
            <div className="p-2 flex justify-around align-center mt-12 mb-8">
            <UpperDivCard upper = {false}/>
            

            <div className ="ml-4">
            
            <UpperDivCard upper = {false}/>
            </div>
                
            </div>

             {/* End of Upper Div Cards */}


             <Divider color="#66FCF1"/>

            {/* Start of Capstone Cards */}
             <div className="self-center mt-12 flex flex-col justify-center align-center">
                <h1 className="text-3xl mb-4 ">Capstone Courses</h1>
                <p className="text-md mb-4 self-center">Many Capstone course options require additional prerequisites not already
required in major requirements. Advance planning is crucial. </p>

                <p className="text-md mb-4 self-center">These courses can be used to satisfy Upper Division Electives. </p>
                
            </div>

            
            <div className=" flex flex-col justify-center align-center mb-12 ">
            
            
            <div className="flex justify-between align-center">

            <div className =" mt-4">
            <CapstoneCard 
            first={true}
            />
            
            
            </div>

            <div className =" mt-4">
            <CapstoneCard first={false}
            />
            
            
            </div>
            </div>
            </div>
            {/* End of Capstone Cards */}

            <Divider color="#66FCF1" className="mb-12"/>

            </div>            
        
        {/* Div With Qualification Courses */}
        
    </div>
  )
}

export default ClassTree