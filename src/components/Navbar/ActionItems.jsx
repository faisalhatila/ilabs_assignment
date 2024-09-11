import React from 'react';

const ActionItems = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="border-2 rounded-[50%] border-white w-[50px] h-[50px] flex items-center justify-center">
        <p className="text-white">EN</p>
      </div>
      <div className="border-2 mx-5 rounded-[25px] border-white px-3 w-[120px] h-[50px] flex items-center justify-center">
        <p className="text-white">Login</p>
      </div>
      <div className="bg-primary border-2 rounded-[25px] border-primary px-3 w-[180px] h-[50px] flex items-center justify-center">
        <p className="text-white">Create Account</p>
      </div>
    </div>
  );
};

export default ActionItems;
