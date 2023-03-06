import React from 'react'
import ClassTakenCard from './ClassTakenCard'
import { useState } from 'react';


class NameForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({value: ""});
    
    event.preventDefault();
  }

  render() {
    return (
        <div >
            <div  className='flex justify-center align -center mb-12 '>
 
      <form onSubmit={this.handleSubmit} className='flex flex-col '>
        <label className='text-lg text-[#fff]'>
          Class Code:
          <input type="text" value={this.state.value} onChange={this.handleChange} className='ml-4 mb-4 text-[#000000] px-2' placeholder='For e.g. CSE 20' />
        </label>
        <input type="submit" value="Submit" className='text-lg text-[#fff] border-2 border-[#66FCF1] rounded-2xl cursor-pointer p-2 mt-4'/>
      </form>
      </div>
      <div className="flex justify-center align-center">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-12'>
            <ClassTakenCard Code ={this.state.value}/>

            
        
        
        </div>
        </div>
      </div>
      
    );
  }
}


const ClassesTaken = () => {
    const [code,SetCode] = useState();
    const [QT,SetQT] = useState();
    


  return (
    <div>
        <div className="flex justify-center align-center text-[#fff] mt-12 text-3xl font-Tilt">
        Classes Taken
      </div>
      <div className="flex justify-center align-center text-[#fff] mt-12 text-lg mb-12 mx-5">
          <p> Add the classes you have taken so far and the quarter you have taken them in</p>
      </div>

      {/* Add a Class Button */}
      <div className="flex justify-center align-center mb-12" >
    <NameForm />

      </div>

        {/* <div className="flex justify-center align-center">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-12'>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>
            <div><ClassTakenCard Code = 'CSE 20' QT ='Fall 2019'/></div>

            
        
        
        </div>
        </div> */}
    </div>
  )
}

export default ClassesTaken