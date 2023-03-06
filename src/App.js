import React, { useState } from 'react';
import Roadmap from './Components/Roadmap';
import ClassesTaken from './Components/ClassesTaken'


function App() {
  const [classesTaken, setClassesTaken] = useState([]);

  const handleClassesTaken = (classes) => {
    setClassesTaken(classes);
  };
  

  return (
    <div 
    className=" bg-[#1F2833] min-h-screen w-screen mx-auto margin-0 font-Roboto">
      <div>
      <h1 className='flex justify-center align-center text-5xl text-[#66FCF1] pt-4 font-Professional'>Major Roadmap</h1>
      {/* <Roadmap /> */}
      </div>
      <div>
      <ClassesTaken onClassesTaken={handleClassesTaken} />

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
