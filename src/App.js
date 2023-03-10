import React, { useState,useEffect } from 'react';
import Roadmap from './Components/Roadmap';
import AddClassesTaken from './Components/AddClassesTaken'
import ClassesToTake from './Components/ClassesToTake';
import AllClassesData from "./Components/classes.json";


function App() {
  
  const [selectedMajor, setSelectedMajor] = useState('');

   const [availableClasses, setAvailableClasses] = useState([]);
   useEffect(() => {
    // Load available classes from local JSON file
    setAvailableClasses(AllClassesData);
  }, []);
  
    const [remainingClasses, setRemainingClasses] = useState([]);
    const [classesTaken, setClassesTaken] = useState([]);
    const [activeComponent, setActiveComponent] = useState('');
    


  useEffect(() => {
  
      const newRemainingClasses = availableClasses.filter((classObj) => {
      
      const isTaken = classesTaken.some((takenClass) => takenClass.classCode === classObj.Code);

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
    className=" bg-[#1F2833] min-h-screen w-screen mx-auto m-0 font-Roboto">
      <div>
        
      <h1 className='flex justify-center align-center  text-3xl md:text-5xl text-[#66FCF1] pt-4 font-Professional '>Major Roadmap</h1>
      
      </div>

      <div className='flex justify-center align-center my-12 text-lg text-[#fff]' >
      <button onClick={() => handleButtonClick('Roadmap')} className='mx-4 border-2 border-border-[#fff] p-2 rounded-xl border-dashed
      hover:border-[#66FCF1] duration-500  '>
      Major Roadmaps
      </button>
      <button onClick={() => handleButtonClick('ClassesTaken')} className='mx-4 border-2 border-[#fff] p-2 rounded-xl border-dashed
      hover:border-[#66FCF1] duration-500'>
        Classes Completed
      </button>
      <button onClick={() => handleButtonClick('Classes To Take')}
      className='mx-4 border-2 border-[#fff] p-2 rounded-xl border-dashed
      hover:border-[#66FCF1] duration-500 '
      >
      Classes Left
      </button>
      </div>
      <div>
      
      {activeComponent === 'Roadmap' && <Roadmap  onSelectMajor={handleSelectMajor} />}

      {activeComponent === 'ClassesTaken' && <AddClassesTaken onClassesTaken={handleClassesTaken} CT ={classesTaken}/>}


      {activeComponent === 'Classes To Take' && <ClassesToTake remainingClasses={remainingClasses} major={selectedMajor}/>}

      </div>
      

    </div>
  );
}

export default App;
