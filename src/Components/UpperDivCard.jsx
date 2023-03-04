import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Divider from '@mui/material/Divider';

const theme = extendTheme({
  components: {
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'solid' &&
            ownerState.clickable && {
              color: 'rgba(255 255 255 / 0.72)',
              '&:hover': {
                color: '#fff',
              },
              '&.Mui-disabled': {
                opacity: 0.6,
              },
            }),
        }),
      },
    },
  },
});

const UpperDivCard = (props) => {
  return (
    <div>
      <div className='w-[320px] border-2 p-4 rounded-2xl border-[#66FCF1] shadow-md shadow-current hover:shadow-2xl hover:shadow-[#66FCF1] duration-500' >
      <Typography level="h1" fontSize="xl" sx={{ mb: 0.5 }}>
      Any upper-division computer science or computer engineering (CSE) courses with
a course number below 170, or between 180-189, or CSE 195 or one from the following list:
      </Typography>
      <Typography level="body2">

          {props.upper ? (
           
            <div className='grid grid-cols-2 mt-4'>
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>AM 114: </h1>
                  
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Introduction to Dynamical Systems</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>AM 147: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Computational Methods and Applications</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 110: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Introduction to Number Theory</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 115: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Graph Theory</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 116: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Combinatorics</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 117: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Advanced Linear Algebra</p>
                  </div>

                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 118: </h1>
                  
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Advanced Number Theory</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 134: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Cryptography</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 145/L:</h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Introductory Chaos Theory </p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 148: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>  Numerical Analysis</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 160:</h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Mathematical Logic I</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>MATH 161: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Mathematical Logic II</p>
                  </div>
                  
                  
                  
                  
              </div>
          ) : 
          (
              <div className='grid grid-cols-2  mt-4'>
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 120: </h1>
                  
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Game Development Experience</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 131: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>User Experience for Interactive Media</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 146: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Game AI</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 163: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Game Graphics and Real-Time Rendering</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 164/L: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Game Engines / Lab</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 171: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Game Design Studio II</p>
                  </div>
                  
                  
                  
                  
              </div>
          )
        //   (<ul>
        //      
        //       <li className='flex justify-start align-center'></li>
        //       <li className='flex justify-start align-center'><h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 171: </h1> <p className='self-center justify-self-center'>Game Design Studio II</p></li>
        //       <li className='flex justify-start align-center'><h1 className='text-[#66FCF1] mr-12 text-lg'>CMPM 172: </h1> <p className='self-center justify-self-center'>Game Development Experience</p></li>
              
        //   </ul>)
          
}
      </Typography>
      
      
    </div>
    </div>
  )
}

export default UpperDivCard