import React from 'react';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const HomeFooter = () => {

  return (
    <div className="w-full bg-transparent h-[86px] text-black flex flex-row justify-end items-center px-[60px]">
      <div>
        <ProfileLinks />
      </div>
    </div>
  );
};

export default HomeFooter;
