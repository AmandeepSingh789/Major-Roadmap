import React from 'react'
import ClassTakenCard from './ClassTakenCard'

const ClassesTaken = () => {
  return (
    <div>
        <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt">
        Classes Taken
      </div>
      <div className="flex justify-center align-center text-[#fff] mt-12 text-lg mb-12">
          <p> Add the classes you have taken so far and the quarter you have taken them in</p>
      </div>

        <div className="flex justify-center align-center">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-8'>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>

            
        
        
        </div>
        </div>
    </div>
  )
}

export default ClassesTaken