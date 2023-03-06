import React from 'react'
import ClassCard from './ClassCard';

const ClassesToTake = ({remainingClasses, major}) => {
    // const { remainingClasses } = remainingClasses;
    
    return (
      <div>
           <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt mb-12">
        {major}
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