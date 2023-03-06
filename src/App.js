import React, { useState } from 'react';
import Roadmap from './Components/Roadmap';
import ClassesTaken from './Components/ClassesTaken'


function App() {
  const [classesTaken, setClassesTaken] = useState([]);
  const [activeComponent, setActiveComponent] = useState('');
  const handleClassesTaken = (classes) => {
    setClassesTaken(classes);
  };
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };


  return (
    <div 
    className=" bg-[#1F2833] min-h-screen w-screen mx-auto margin-0 font-Roboto">
      <div>
        
      <h1 className='flex justify-center align-center text-5xl text-[#66FCF1] pt-4 font-Professional'>Major Roadmap</h1>
      {/* <Roadmap /> */}
      
      </div>

      <div className='flex justify-center align-center my-12 text-lg text-[#fff]' >
      <button onClick={() => handleButtonClick('Roadmap')} className='mx-4 border-2 border-[#66FCF1] p-2 rounded-xl'>
      Major Roadmaps
      </button>
      <button onClick={() => handleButtonClick('ClassesTaken')} className='mx-4 border-2 border-[#66FCF1] p-2 rounded-xl'>
        Add Classes Taken
      </button>
      {/* <button onClick={() => handleButtonClick('component3')}>
        Show Component 3
      </button> */}
      </div>
      <div>
      {/* <ClassesTaken onClassesTaken={handleClassesTaken} /> */}
      {activeComponent === 'Roadmap' && <Roadmap />}
      {activeComponent === 'ClassesTaken' && <ClassesTaken onClassesTaken={handleClassesTaken}/>}
      </div>

      {classesTaken.map((classObj, index) => (
  <div key={index}>
    <p>Class Code: {classObj.classCode}</p>
    <p>Quarter Taken: {classObj.quarterTaken}</p>
  </div>
))}
      
    </div>
  );
}

export default App;
