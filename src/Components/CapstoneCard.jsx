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

const CapstoneCard = (props) => {
  return (
    <div>
      <div className='w-[320px] border-2 p-4 rounded-2xl border-[#66FCF1] shadow-md shadow-current hover:shadow-2xl hover:shadow-[#66FCF1] duration-500' >
     
      <Typography level="body2">

          {props.first ? (
           
            <div className='grid grid-cols-2 mt-4'>
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 110B: </h1>
                  
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Fundamentals of Compiler Design II</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 115C: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Software Design Project III</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 115D: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Software Design Project - Accelerated</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 118: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Mobile Applications</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 121/L: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Microprocessor System Design / Lab</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 138: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Distributed Systems</p>
                  </div>

                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 140 : </h1>
                  
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Artificial Intelligence</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 143: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Introduction to Natural Language Processing</p>
                  </div>
                  
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 144:</h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Applied Machine Learning </p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 156/L: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>  Network Programming / Lab</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 157 :</h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Internet of Things</p>
                  </div>
                  
              </div>
          ) : 
          (

              <div className='grid grid-cols-2  mt-4'>
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 160/L: </h1>
                  
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Introduction to Computer Graphics / Lab</p>
                  
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 161/L: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Introduction to Data Visualization / Lab</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 162/L: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Advanced Computer Graphics and Animation / Lab</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 163: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Data Programming for Visualization</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'> CSE 168: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Introduction to Augmented Reality and Virtual Reality</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 181: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Database Systems II</p>
                  </div>
                  

                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'> CSE 183: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Web Applications</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'>CSE 184: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>Data Wrangling and Web Scraping</p>
                  </div>


                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'> CMPM 172: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'>  Game Design Studio III</p>
                  </div>
                  
                  <div className='mb-4'>
                  <h1 className='text-[#66FCF1] mr-12 text-lg'> ECE 118/L: </h1> 
                  </div>
                  <div className="center-self justify-self-center mb-4">
                  <p className='self-center justify-self-center'> Introduction to Mechatronics / Lab</p>
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

export default CapstoneCard