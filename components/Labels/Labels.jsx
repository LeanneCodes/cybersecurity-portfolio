import React from 'react';

const Labels = ({ children }) => {
  // Determine label background dynamically based on children
  let labelBg = '';
  switch (children) {
    case 'Mobile':
      labelBg = 'bg-lightGrey';
      break;
    case 'App':
      labelBg = 'bg-sage';
      break;
    case 'React':
      labelBg = 'bg-moss text-white';
      break;
    case 'Gaming':
      labelBg = 'bg-cream';
      break;
    case 'JavaScript':
      labelBg = 'bg-darkGrey text-white';
      break;
    case 'Tailwind':
      labelBg = 'bg-grey text-white';
      break;
    case 'API':
      labelBg = 'bg-tan';
      break;
    case 'Postman':
      labelBg = 'bg-lightGrey';
      break;
    default:
      labelBg = 'bg-darkGrey text-white';
      break;
  }

  return (
    <div className={`rounded-full border-none px-4 py-2 text-[14px] ${labelBg}`}>
      {children}
    </div>
  );
};

export default Labels;
