import React from 'react'
import ClassCard from './ClassCard';

const ClassesToTake = ({remainingClasses, major}) => {
    // const { remainingClasses } = remainingClasses;
    
    return (
      <div>
           <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt mb-12">
        {major}
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-12 mx-12 text-[#fff]'>
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
    );
  
}

export default ClassesToTake