import React,{useState,useEffect} from 'react'
import ClassCard from './ClassCard';

const ClassesToTake = ({remainingClasses, major}) => {
    // const { remainingClasses } = remainingClasses;
    const [totalClasses, setTotalClasses] = useState()
    const [remainingClassesLength, setremainingClassesLength] = useState(remainingClasses.length)
   
    console.log(remainingClassesLength);
    function calculateTotalClasses(major,remainingClassesLength){
      console.log(major);
      
      if (major === "Computer Science BS"){
        return (22- (23- remainingClassesLength))
      }
      if (major === "Computer Science BA"){
        return (17- (23- remainingClassesLength))
      }
    }
    useEffect(() => {
      // Your code to calculate the total classes based on the `major` prop
      setremainingClassesLength(remainingClasses.length);
      const newTotalClasses = calculateTotalClasses(major,remainingClassesLength);
      console.log(newTotalClasses);
      // Update the state variable `totalClasses`
      setTotalClasses(newTotalClasses);
      
      
    }, [major,remainingClasses]);
    
    return (
      <div>
           <div className="flex flex-col justify-center align-center text-[#fff] mt-12 text-lg md:text-3xl font-Tilt mb-12">
        <div className="self-center ">{major}</div>
        <div className="self-center">
        <p >You have {totalClasses} C.S. classes left to take.</p>
        </div>
        
      </div>
      <p className="flex justify-center align-center text-[#fff] mt-12 text-xl mb-12 mx-12">
        This is a list of all potential classes you might have left. For specifics regarding upper division, capstone or breadth courses and the order of the courses, Please check the roadmap for your major.
      </p>
      <div className="flex justify-center align-center" >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-12 text-[#fff] justify-self-center mx-auto'>
          {remainingClasses.map((classObj, index) => (
          <ClassCard
          key={index}
          Code={classObj.Code}
          Name={classObj.Name}
          Link={classObj.Link}
          Level={classObj.Level}
          PreReqs={classObj.PreReqs}
          QO={classObj.QO}
          GE={classObj.GE}
        />
        ))}
          </div>
      </div>
          
        
      </div>
    );
  
}

export default ClassesToTake