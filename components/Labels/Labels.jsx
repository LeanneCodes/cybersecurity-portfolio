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
      labelBg = 'bg-cream';
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
    case 'HTML':
      labelBg = 'bg-cream';
      break;
    case 'CSS':
      labelBg = 'bg-sage';
      break;
    case 'Ecommerce':
      labelBg = 'bg-grey text-white';
      break;
    case 'NextJs':
      labelBg = 'bg-tan';
      break;
    case 'NodeJs':
      labelBg = 'bg-lightGrey';
      break;
    case 'TypeScript':
      labelBg = 'bg-cream';
      break;
    case 'GSAP':
      labelBg = 'bg-darkGrey text-white';
      break;
    case 'Framer Motion':
      labelBg = 'bg-grey text-white';
      break;
    case 'Figma':
      labelBg = 'bg-lightGrey';
      break;
    case 'Photoshop':
      labelBg = 'bg-lightGrey';
      break;
    case 'AdobeXD':
      labelBg = 'bg-tan';
      break;
    case 'Desktop':
      labelBg = 'bg-darkGrey text-white';
      break;
    case 'MangoDB':
      labelBg = 'bg-lightGrey';
      break;
    case 'Express':
      labelBg = 'bg-tan';
      break;
    case 'HeadlessCMS':
      labelBg = 'bg-darkGrey text-white';
      break;
    default:
      labelBg = 'bg-darkGrey text-white';
      break;
  }

  return (
    <div className={`rounded-full border-none px-4 py-2 text-[14px] skill-label ${labelBg}`}>
      {children}
    </div>
  );
};

export default Labels;
