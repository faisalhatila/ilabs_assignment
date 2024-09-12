import React from 'react';
import { useState } from 'react';

const DashboardGrid = () => {
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const items = [
    'NodeJS',
    'React',
    'Vue',
    '3 D',
    'Express',
    'Python',
    'MongoDB',
    'Angular',
    'Flask',
    'Bootstrap',
    'CodeIgniter',
    'PHP',
    'Django',
    'Ionic',
    'Rails',
  ];
  const tabs = [
    { title: 'Frameworks', tabIndex: 0 },
    { title: 'Frontend Development', tabIndex: 2 },
    { title: 'Backend Development', tabIndex: 4 },
  ];

  return (
    <div className="hidden md:block px-[20px] sm:px-[40px] md:px-[10%] bg-[#EDF7FA] py-[112px]">
      <div className="mb-[80px]">
        <p className="text-[#64748B] text-[18px] font-[400] leading-[24px]">
          Our Stocks
        </p>
        <p className="w-[360px] text-dark text-[36px] font-[700] leading-[41px]">
          We Use The Latest Technology
        </p>
      </div>
      <div className="flex items-center gap-[56px]">
        <div className="flex gap-[16px]">
          <div>
            {[...Array(5)].map((_, index) => (
              <div
                className={`${
                  index === 0 || index === 2 || index === 4
                    ? 'h-[55px]'
                    : 'h-[20px]'
                } w-[2px] ${
                  index === activeTabIndex ? 'bg-primary' : 'bg-white'
                }`}
              ></div>
            ))}
          </div>
          <div className="flex flex-col gap-[20px]">
            {tabs.map(({ title, tabIndex }, index) => (
              <div
                className={`h-[55px] bg-primary] w-[350px] flex px-[30px] items-center ${
                  tabIndex === activeTabIndex && 'bg-primary'
                } cursor-pointer`}
                onClick={() => setactiveTabIndex(tabIndex)}
              >
                <label
                  className={`text-[18px] font-[400] leading-[27px] ${
                    activeTabIndex === tabIndex ? 'text-white' : 'text-dark'
                  }`}
                >
                  {title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative grid grid-cols-5 grid-rows-3 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border-t-0 border-r-0 ${index > 9 && 'border-b-0'} ${
                (index === 0 || index === 5 || index === 10) && 'border-l-0'
              } border-dashed border-[#ccc] border-2 relative p-5`}
            >
              {index !== 4 && index !== 9 && index !== 14 && (
                <div className="absolute z-10 w-[15px] h-[15px] bg-dark rounded-[50%] right-[-9px] bottom-[-9px]" />
              )}
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
