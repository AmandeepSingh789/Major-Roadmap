import React from 'react'

const ClassesToTake = ({remainingClasses, major}) => {
    // const { remainingClasses } = remainingClasses;
    
    return (
      <div>
          {major}
        {remainingClasses.map((classObj, index) => (
          <div key={index}>
            <p>Class Code: {classObj.classCode}</p>
            <p>Quarter Taken: {classObj.quarter}</p>
          </div>
        ))}
      </div>
    );
  
}

export default ClassesToTake