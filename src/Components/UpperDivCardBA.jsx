import * as React from 'react';
import Typography from '@mui/joy/Typography';


const UpperDivCardBA = (props) => {
  return (
    <div>
      
      <div className='w-[320px] border-2 p-4 rounded-2xl border-[#66FCF1] shadow-custom2 hover:shadow-custom hover:translate-y-[-20px] hover:translate-x-2 duration-500' >
      <Typography level="h1" fontSize="xl" sx={{ mb: 0.5 }}>
      Any upper-division computer science or computer engineering (CSE) courses with
a course number below 170, or between 180-189, or CSE 195 or one from the following list:
      </Typography>
      <Typography level="body2">

          {props.first ? (
           
            <div className='grid grid-cols-2 mt-4'>
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'> ARTG 118: </h1>
                  
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Character Creation for Video Games</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>EART 124: </h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Modeling Earth’s Climate</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>EART 125: </h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Statistics and Data Analysis in the Geosciences</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>EART 172/OCEA 172: </h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Geophysical Fluid Dynamics</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>ECON 100M: </h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Intermediate Microeconomics, MathIntensive </p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>ECON 100N: </h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Intermediate Macroeconomics, MathIntensive </p>
                  </div>

                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>ECON 101: </h1>
                  
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Managerial Economics </p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>ENVS 115A/L : </h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Geographic Information Systems and Environmental Applications</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>FILM 170A:</h1> 
                  </div>
                  <div className=" justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Fundamentals of Digital Media Production </p>
                  </div>
                  
                  
                  
                  
              </div>
          ) : 
          (
              <div></div>
          )

}

{props.second ? (
    <div className='grid grid-cols-2 mt-4'>
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'> LING 112: </h1>
    
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Syntax I</p>
    
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>LING 113: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Syntax II</p>
    </div>
    
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>LING 118: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Semantics III</p>
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>LING 125: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'> Foundations of Linguistic Theory</p>
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 110: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Introduction to Number Theory</p>
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 115: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'> Graph Theory </p>
    </div>

    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 116: </h1>
    
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Combinatorics </p>
    
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 117: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Advanced Linear Algebra</p>
    </div>
    
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 118:</h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Advanced Number Theory </p>
    </div>
    
    
    
    
</div>
) : (<div></div>)}

{props.third ? (
    
    <div className='grid grid-cols-2 mt-4'>
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'> MATH 134: </h1>
    
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Cryptography</p>
    
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 145/L: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Introductory Chaos Theory / Lab</p>
    </div>
    
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 148: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Numerical Analysis</p>
    </div>

    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'> MATH 160: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Mathematical Logic I</p>
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 161: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Mathematical Logic II</p>
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MUSC 123: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'> Electronic Sound Synthesis </p>
    </div>

    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MUSC 124 : </h1>
    
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'> Intermediate Electronic Sound Synthesis </p>
    
    </div>
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>MUSC 125: </h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Advanced Electronic Sound Synthesis</p>
    </div>
        {/* 
 PHYS 115 Computational Physics
 PHYS 150  */}
    
    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>PHYS 115:</h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Computational Physics</p>
    </div>

    <div className='mb-4'>
    <h1 className='text-[#66FCF1] mr-12 text-lg'>PHYS 150:</h1> 
    </div>
    <div className=" justify-self-center mb-4">
    <p className='self-center justify-self-center'>Quantum Computing</p>
    </div>
    
    
    
    
</div>
) : (<div></div>)}
      </Typography>
      
      
    </div>
    </div>
  )
}

export default UpperDivCardBA