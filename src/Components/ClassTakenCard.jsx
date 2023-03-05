
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const ClassTakenCard = (props) => {

        return (
          <div>
            <div className='w-[320px] border-2 p-4 rounded-2xl border-[#66FCF1] shadow-custom2 hover:shadow-custom hover:translate-y-[-20px] hover:translate-x-2 duration-500' >
            
            <div>
            <h1 className='text-xl text-[#66FCF1] md:text-2xl font-extrabold' >
              {props.Code}
            </h1>
            {/* sx={{ mb: 0.5 }} */}
            </div>
            
            <div className='flex justify-center align-center my-4 text-xl text-[#66FCF1]'>{props.QT}</div>
      
            <div className='flex flex-col justify-center align-center'>
              <div className='flex flex-col justify-center align-center'>
            
      
              </div>
            
            </div>
          </div>
          </div>
        )
      
}

export default ClassTakenCard