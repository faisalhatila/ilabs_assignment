import React from 'react';

const HeroContent = () => {
  const keyPoints = [
    'White-label development services with rapid turnaround times.',
    'Unmatched quality for app development agencies and companies.',
    'ROI and margins tailored for app development resellers.',
  ];
  return (
    <div className="flex-1">
      <p className="text-white text-[40px] font-bold">
        Your <span className="text-primary">Development</span> Team
      </p>
      <p className="text-white text-[30px]">
        In 1 day. For just <span className="text-primary">20€</span> /hr.
      </p>
      <p className="text-white text-[18px]">
        Building Mind-Blowing Websites And Apps.
      </p>
      <p className="text-white text-[18px]">
        400+ customers serviced since 2019.
      </p>
      {keyPoints.map((point, index) => (
        <div
          key={index}
          className={`flex items-center ${
            index < keyPoints.length - 1 && 'mb-[12px]'
          }`}
        >
          <img src="/assets/icons/Check.svg" />
          <p className="text-[17px] font-[400] leading-[24px] text-white ml-[8px]">
            {point}
          </p>
        </div>
      ))}
      <div className="bg-[#02465F] w-fit px-[15px] py-[9px] rounded-[7px] my-[32px] flex">
        <p className="text-white flex">
          We are rated <strong className="mx-2">5</strong> on
          <img src="/assets/icons/ClutchLogo.png" className="mx-2" /> based on
          <strong className="ml-2">29 reviews</strong>
        </p>
      </div>
      <div className="flex items-center">
        <button className="rounded-[24px] bg-primary border-primary border-2 text-white w-[232px] py-[12px]">
          Create an Account
        </button>
        <button className="rounded-[24px] bg-dark border-primary border-2 ml-[20px] text-white  w-[168px] py-[12px]">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
