import React, { useState } from 'react'
import MajorPicker from './MajorPicker';
import ClassTree from './ClassTree';

const Roadmap = ({ onSelectMajor }) => {

  const [selectedMajor, setSelectedMajor] = useState('');

  const handleSelect = (major) => {
    setSelectedMajor(major);
    onSelectMajor(major);
   
  };

  return (
    <div>
        
        <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt">
        Choose Your Major
      </div>
      <div className='flex justify-center align-center mt-12'> 
        <MajorPicker onSelect={handleSelect}/>
        
      </div>
      <div className='flex justify-center align-center mt-12 text-[#fff]'>
        
      {/* <ClassTree BS={Bs} BA={Ba}/> */}
      {selectedMajor && <ClassTree major={selectedMajor} />}
      </div>
    </div>
  )
}

export default Roadmap