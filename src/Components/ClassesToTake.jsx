import React,{useState,useEffect} from 'react'
import ClassCard from './ClassCard';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';

const ClassesToTake = ({remainingClasses, major}) => {

    const [totalClasses, setTotalClasses] = useState();
    const [remainingClassesLength, setremainingClassesLength] = useState(remainingClasses.length)
    const [progressBar, setprogressBar] = useState(0)
    
    console.log(remainingClassesLength);
    function calculateTotalClasses(major,remainingClassesLength){
      console.log(major);
      
      if (major === "Computer Science BS"){
        setprogressBar(22 - (22- (23- remainingClassesLength)))
        return (22- (23- remainingClassesLength))

      }
      if (major === "Computer Science BA"){
        setprogressBar(17 - (17- (23- remainingClassesLength)))
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
     
    }, [major,remainingClasses,setremainingClassesLength]);
    
    return (
      

      <div>
      
      {
             major === 'Choose A Major' ? (<div className="text-lg font-Tilt">Please select a major to see the classes left.</div>) : (
              
              <div>
           <div className="flex flex-col justify-center align-center text-[#fff] mt-12 text-lg md:text-3xl font-Tilt mb-12">
        <div className="self-center ">{major}</div>
        <div className="self-center">
        {major  ? (<p >You have {totalClasses} C.S. classes left to take.</p>) : (null)}
        
        {major === 'Computer Science BS' ? (<div className='mt-4 justify-center align-center flex '>

        <LinearProgress variant="determinate" color="inherit" value={(progressBar/22) *100} />
        
        <div className='mt-4 justify-center align-center'>{((progressBar/22) *100).toFixed(2)}% </div>

        
    </div>) : (null)}
    
    {major === 'Computer Science BA' ? (<div className='mt-4'>
        <LinearProgress variant="determinate" color="inherit" value={(progressBar/17) *100} />
        
        <div className='mt-4 flex justify-center align-center center-self self-center'>{((progressBar/17) *100).toFixed(2)}% </div>
    </div>) : (null)}

       
        </div>
        
      </div>
      <div>
      <p className="flex justify-center align-center text-[#fff] mt-12 text-xl mb-12 mx-12">
        This is a list of all potential classes you might have left. For specifics regarding upper division, capstone or breadth courses and the order of the courses, Please check the roadmap for your major.
      </p>
      
      </div>
      
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
                
             )
      }
      
      </div>
      
      
    )
  
}

export default ClassesToTake