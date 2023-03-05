import React from 'react'
import MajorPicker from './MajorPicker';
import ClassTree from './ClassTree';

const Roadmap = () => {
  let Ba= true
  let Bs= false
  return (
    <div>
        
        <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt">
        Choose Your Major
      </div>
      <div className='flex justify-center align-center mt-12'> 
        <MajorPicker />
        
      </div>
      <div className='flex justify-center align-center mt-12'>
      <ClassTree BS={Bs} BA={Ba}/>
      </div>
    </div>
  )
}

export default Roadmap