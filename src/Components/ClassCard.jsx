import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const ClassCard = (props) => {
  let v1 = (Math.min(props.Level *100 ,100))
  let v2 = (Math.min(props.Level *100 -100,100))
  let v3 = (Math.min(props.Level *100 -200,100))
  let v4 = (Math.min(props.Level *100 -300,100))
  let v5 = (Math.min(props.Level *100 -400,100))
  v1 = v1 < 0 ? 0 : v1;
  v2 = v2 < 0 ? 0 : v2;
  v3 = v3 < 0 ? 0 : v3;
  v4 = v4 < 0 ? 0 : v4;
  v5 = v5 < 0 ? 0 : v5;
  return (
    <div>
      <div className='w-[320px] border-2 p-4 rounded-2xl border-[#66FCF1] shadow-custom2 hover:shadow-custom hover:translate-y-[-20px] hover:translate-x-2 duration-500' >
      
      <div>
      <h1 className='text-xl text-[#66FCF1] md:text-2xl font-extrabold' >
        {props.Code}
      </h1>
      {/* sx={{ mb: 0.5 }} */}
      </div>
      
      <div className='flex justify-center align-center my-4 text-lg'>{props.Name}</div>

      <div className='flex flex-col justify-center align-center'>
        <div className='flex flex-col justify-center align-center'>
          <div className='flex justify-center align-center text-xl ' >Difficulty Level</div>
          <div className='my-4 justify-center align-center'>
          

          <Stack spacing={2} direction="row" sx={{ color: '#66FCF1' }}>
          <CircularProgress variant="determinate" value={v1} color="inherit" />
          <CircularProgress variant="determinate" value={v2} color="inherit"   />
          <CircularProgress variant="determinate" value={v3} color="inherit"  />
          <CircularProgress variant="determinate" value={v4} color="inherit"  />
          <CircularProgress variant="determinate" value={v5} color="inherit"  />
    </Stack> 
          </div>
          
          <div className='text-lg mb-4'>
            {props.PreReqs}
          </div>

          <div className='text-lg mb-4' >
            {props.GE}
          </div>

          <div className='text-lg mb-4' >
            {props.QO}
          </div>

        </div>
        <Button
          variant="solid"
          size="xl"
          color="primary"
          aria-label="Explore"
          sx={{ ml: 'auto', fontWeight: 600 }}
          href={props.Link}
          
        >
          <a href={props.Link} target="_blank" rel="noopener noreferrer" className='border-2 p-2  border-[#66FCF1] rounded hover:bg-[#2a5e5c] duration-500 ml-4'>
            Know More
            </a>
        </Button>
      </div>
    </div>
    </div>
  )
}

export default ClassCard