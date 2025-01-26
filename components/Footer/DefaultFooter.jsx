import React from 'react';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="xxs:px-[20px] w-full bg-black h-[86px] text-white flex flex-row justify-between items-center px-[60px]">
      <div>
        <ProfileLinks />
      </div>
      <div className="xxs:text-[12px] xxs:px-4 xxs:text-center xs:text-sm md:text-[16px]">
        Copyright, Leanne M. Goldsmith {currentYear}
      </div>
    </div>
  );
};

export default DefaultFooter;
