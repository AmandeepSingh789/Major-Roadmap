import * as React from 'react';
import MajorPicker from './Components/MajorPicker';

function App() {
  
  return (
    <div className="bg-[#0B0C10] min-h-screen w-screen mx-auto margin-0 font-Roboto">
      <div>
      <h1 className='flex justify-center align-center text-5xl text-[#fff] pt-4 font-Professional'>Class Scheduler</h1>
      </div>
      <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl">
        Choose Your Major
      </div>
      <div className='flex justify-center align-center mt-12'> 
        <MajorPicker/>
      </div>
      
      
      
    </div>
  );
}

export default App;
