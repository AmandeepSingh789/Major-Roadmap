import ClassTakenCard from './ClassTakenCard'
import { useState,useEffect } from 'react';


const AddClassesTaken = ({ onClassesTaken ,CT }) => {
    
 const [classes, setClasses] = useState([]);
  const [classCode, setClassCode] = useState('');
  const [quarterTaken, setQuarterTaken] = useState('');

  useEffect(() => {
    // Retrieve saved classes from localStorage, if any
    const savedClasses = JSON.parse(localStorage.getItem('classes'));
    if (savedClasses) {
      setClasses(savedClasses);
    }
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newClasses = [...classes, { classCode, quarterTaken }];
    setClasses(newClasses);

    onClassesTaken(newClasses);

    localStorage.setItem('classes', JSON.stringify(newClasses));

    // Reset the form after submission
    setClassCode('');
    setQuarterTaken('');
    
  };

  const handleClassCodeChange = (event) => {
    setClassCode(event.target.value);
  };

  const handleQuarterTakenChange = (event) => {
    setQuarterTaken(event.target.value);
  };

  const handleDelete = (index) => {
    const newClasses = [...classes];
    newClasses.splice(index, 1);
    setClasses(newClasses);
    onClassesTaken(newClasses);
    localStorage.setItem('classes', JSON.stringify(newClasses));
  };
  

  return (
    <div>
        <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt">
        Classes Completed
        
      </div>
      <div className="flex justify-center align-center text-[#fff] mt-12 text-lg mb-12 mx-5">
          <p> Add the classes you have taken so far and the quarter you have taken them in.</p>
      </div>

      {/* Add a Class Button */}
      <div className='flex justify-center align-center text-[#fff] mt-12 text-lg mb-12 mx-5'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center align-center ' >
          <div>
          <label className='text-xl my-4 self-center justify-self-center'>
          Class code:
          <input type="text" value={classCode} onChange={handleClassCodeChange} className='text-xl ml-2 md:mx-10 px-2 text-[#000000]' placeholder='For Example, CSE 20' 
          required/>
        </label>
          </div>
        
        <label className='text-xl my-4'>
          Quarter taken:
          <input type="text" value={quarterTaken} onChange={handleQuarterTakenChange} 
          className='text-xl ml-2 md:mx-5 px-2 text-[#000000]' placeholder='For Example, Fall 2019'
          required/>
        </label>
        <button type="submit"
        className='border-2 rounded-2xl py-2'
        >Submit</button>
      </form>
      </div>
      <div className="flex justify-center align-center">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-12 mx-auto ' >

{classes.map((classObj, index) => (
<ClassTakenCard
key={index}
classCode={classObj.classCode}
quarterTaken={classObj.quarterTaken}
onDelete={() => handleDelete(index)}
/>
))}

</div>
      </div>
      

    </div>
  )
}

export default AddClassesTaken