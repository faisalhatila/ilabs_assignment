import React from 'react';

const HeroContent = () => {
  const keyPoints = [
    'White-label development services with rapid turnaround times.',
    'Unmatched quality for app development agencies and companies.',
    'ROI and margins tailored for app development resellers.',
  ];
  return (
    <div className="md:flex-1">
      <p className="text-white text-[40px] font-bold">
        Your <span className="text-primary">Development</span> Team
      </p>
      <p className="text-white text-[30px]">
        In 1 day. For just <span className="text-primary">20€</span> /hr.
      </p>
      <p className="text-white text-[18px mt-[15px]">
        Building Mind-Blowing Websites And Apps.
      </p>
      <p className="text-white text-[18px]">
        400+ customers serviced since 2019.
      </p>
      <div className="flex flex-col gap-[12px] mt-[32px]">
        {keyPoints.map((point, index) => (
          <div
            key={index}
            className={`flex items-start md:items-center ${
              index < keyPoints.length - 1 && 'mb-[12px]'
            }`}
          >
            <img src="/assets/icons/Check.svg" />
            <p className="text-[17px] font-[400] leading-[24px] text-white ml-[8px]">
              {point}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-[#02465F] w-[100%] md:w-fit px-[15px] py-[9px] rounded-[7px] my-[32px] flex">
        <p className="hidden text-white md:flex flex-col w-[100%] md:flex-row">
          We are rated <strong className="mx-2">5</strong> on
          <img src="/assets/icons/ClutchLogo.png" className="mx-2" /> based on
          <strong className="ml-2">29 reviews</strong>
        </p>
        <div className="flex md:hidden w-[100%] flex-col gap-[10px]">
          <p className="text-white text-center w-[100%] text-[18px] font-[600]">
            We are rated 5 on
          </p>
          <img src="/assets/icons/ClutchLogo.png" className="mx-2" />
          <p className="text-white text-center w-[100%] text-[18px] font-[600]">
            based on 29 reviews
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <button className="rounded-[24px] bg-primary border-primary border-2 text-white md:w-[232px] w-[100%] py-[12px]">
          Create an Account
        </button>
        <button className="rounded-[24px] bg-dark border-primary border-2 mt-[20px] md:mt-[0px] md:ml-[20px] text-white w-[100%] md:w-[168px] py-[12px]">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
