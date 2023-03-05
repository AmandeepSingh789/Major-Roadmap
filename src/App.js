import * as React from 'react';
import MajorPicker from './Components/MajorPicker';
import ClassTree from './Components/ClassTree';

function App() {

  return (
    <div 
    className=" bg-[#1F2833] min-h-screen w-screen mx-auto margin-0 font-Roboto">
      <div>
      <h1 className='flex justify-center align-center text-5xl text-[#66FCF1] pt-4 font-Professional'>Major Roadmap</h1>
      </div>
      <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt">
        Choose Your Major
      </div>
      <div className='flex justify-center align-center mt-12'> 
        <MajorPicker />
        
      </div>
      <div className='flex justify-center align-center mt-12'>
      <ClassTree BA={true}/>
      </div>
      
      
      
      
    </div>
  );
}

export default App;
