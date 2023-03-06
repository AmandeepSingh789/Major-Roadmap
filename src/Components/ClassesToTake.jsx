import React from 'react'

const ClassesToTake = (props) => {
    const { remainingClasses } = props;
    
    return (
      <div>
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