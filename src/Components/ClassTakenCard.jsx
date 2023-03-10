import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const ClassTakenCard = ({ classCode, quarterTaken, onDelete }) => {
  return (
    <div className="w-[320px] border-2 p-4 rounded-2xl border-[#66FCF1] shadow-custom2 hover:shadow-custom hover:translate-y-[-20px] hover:translate-x-2 duration-500">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="text-xl text-[#66FCF1] md:text-2xl font-extrabold">{classCode}</h1>
        </div>

        <CloseIcon sx={{color: "#66FCF1"}} onClick={onDelete} className="cursor-pointer"/>

      </div>

      <div className="flex justify-center align-center my-4 text-xl text-[#66FCF1]">{quarterTaken}</div>
    </div>
  );
};

export default ClassTakenCard;
