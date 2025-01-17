import React from 'react';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="xxs:px-[20px] fixed bottom-0 w-full bg-black h-[86px] text-white flex flex-row justify-between items-center px-[60px] z-50">
      <div>
        <ProfileLinks />
      </div>
      <div className='xxs:text-sm xxs:text-center'>
        Copyright, Leanne M. Goldsmith {currentYear}
      </div>
    </div>
  );
};

export default DefaultFooter;
