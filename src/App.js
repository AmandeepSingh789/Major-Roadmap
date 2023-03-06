import React, { useState,useEffect } from 'react';
import Roadmap from './Components/Roadmap';
import ClassesTaken from './Components/ClassesTaken'
import ClassesToTake from './Components/ClassesToTake';

function App() {
  const [availableClasses, setAvailableClasses] = useState([
    { classCode: 'CSE 12', quarter: 'Fall 2022' },
    { classCode: 'CSE 20', quarter: 'Fall 2022' },
    { classCode: 'CSE 21', quarter: 'Fall 2022' },
    { classCode: 'CSE 30', quarter: 'Fall 2022' },
    { classCode: 'CSE 100', quarter: 'Fall 2022' },
    // Add more classes here
  ]);
  const [selectedMajor, setSelectedMajor] = useState('');

    const [remainingClasses, setRemainingClasses] = useState([]);
    const [classesTaken, setClassesTaken] = useState([]);
    const [activeComponent, setActiveComponent] = useState('');

  useEffect(() => {
    // Update the remaining classes whenever the taken classes change
    const newRemainingClasses = availableClasses.filter((classObj) => {
      // Check if the class is in the taken classes array
      const isTaken = classesTaken.some((takenClass) => takenClass.classCode === classObj.classCode);

      // If the class is not taken, keep it in the remaining classes array
      return !isTaken;
    });

    setRemainingClasses(newRemainingClasses);
  }, [classesTaken, availableClasses]);


  const handleClassesTaken = (classes) => {
    setClassesTaken(classes);
  };
  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleSelectMajor = (major) => {
    setSelectedMajor(major);
  };

  return (
    <div 
    className=" bg-[#1F2833] min-h-screen w-screen mx-auto margin-0 font-Roboto">
      <div>
        
      <h1 className='flex justify-center align-center  text-3xl md:text-5xl text-[#66FCF1] pt-4 font-Professional '>Major Roadmap</h1>
      
      </div>

      <div className='flex justify-center align-center my-12 text-lg text-[#fff]' >
      <button onClick={() => handleButtonClick('Roadmap')} className='mx-4 border-2 border-[border-[#fff] p-2 rounded-xl border-dashed
      hover:border-[#66FCF1] duration-500  '>
      Major Roadmaps
      </button>
      <button onClick={() => handleButtonClick('ClassesTaken')} className='mx-4 border-2 border-[#fff] p-2 rounded-xl border-dashed
      hover:border-[#66FCF1] duration-500'>
        Add Classes Taken
      </button>
      <button onClick={() => handleButtonClick('Classes To Take')}
      className='mx-4 border-2 border-[#fff] p-2 rounded-xl border-dashed
      hover:border-[#66FCF1] duration-500'
      >
      Classes To Take
      </button>
      </div>
      <div>
      {activeComponent === 'Classes To Take' && <ClassesToTake remainingClasses={remainingClasses} major={selectedMajor}/>}
      {activeComponent === 'Roadmap' && <Roadmap  onSelectMajor={handleSelectMajor} />}
      {activeComponent === 'ClassesTaken' && <ClassesTaken onClassesTaken={handleClassesTaken} />}
      </div>
      

      {/* {remainingClasses.map((classObj, index) => (
  <div key={index}>
    <p>Class Code: {classObj.classCode}</p>
    <p>Quarter Taken: {classObj.quarterTaken}</p>
  </div>
))} */}
    </div>
  );
}

export default App;
