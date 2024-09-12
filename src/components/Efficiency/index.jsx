import React from 'react';

const Efficiency = () => {
  const efficiencyData = [
    {
      title: 'Add Your Team',
      description:
        'Effortlessly include multiple users to place and manage orders.',
    },
    {
      title: 'Easy Ordering',
      description:
        'Place orders with ease, including one-click repeat ordering.',
    },
    {
      title: 'White Label',
      description: 'All services are white-labeled for seamless reselling.',
    },
    {
      title: 'Scalable Pricing',
      description:
        'Our dependable low prices are specifically designed for resellers.',
    },
  ];
  return (
    <div className="px-[20px] py-[112px] sm:px-[40px] md:px-[10%] bg-dark">
      <div>
        <p className="text-center text-white text-[38px] font-[600] leading-[45px]">
          A workspace optimized for outsourcing efficiency
        </p>
        <p className="text-center text-white text-[18px] font-[400] leading-[24px]">
          Invite team members to collaborate, track, and manage orders with you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[0px] md:gap-[112px] items-center">
        <div className="my-[65px]">
          <img src="/assets/images/efficiency-dashboard.png" />
        </div>
        <div className="flex-1">
          <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-4">
            {efficiencyData.map(({ title, description }, index) => (
              <div key={index}>
                <div className="">
                  <img src="/assets/icons/Check.svg" />
                </div>
                <p className="text-white text-[22px] font-[600] leading-[120%] my-[20px]">
                  {title}
                </p>
                <p className="max-w-[287px] text-[#64748B] text-[16px] font-[400] leading-normal">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[50px] md:mt-[0px]">
        <button className="boder-2 border-primary bg-primary text-white flex justify-center items-center py-[20px] px-[40px] rounded-[40px]">
          Create An Account
        </button>
      </div>
    </div>
  );
};

export default Efficiency;
