import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

const ExcelledIndustries = () => {
  const { t } = useTranslation();
  const services = [
    {
      img: 'assets/images/excelled-industries/service-1.png',
      title: 'excelled.items.item-1',
    },
    {
      img: 'assets/images/excelled-industries/service-2.png',
      title: 'excelled.items.item-2',
    },
    {
      img: 'assets/images/excelled-industries/service-3.png',
      title: 'excelled.items.item-3',
    },
    {
      img: 'assets/images/excelled-industries/service-4.png',
      title: 'excelled.items.item-4',
    },
    {
      img: 'assets/images/excelled-industries/service-5.png',
      title: 'excelled.items.item-5',
    },
  ];
  return (
    <div className="my-[56px]">
      <div className="flex flex-col items-center mb-[56px] px-[20px]">
        <div className="relative flex">
          <p className="font-[600] text-[38px] text-dark leading-[45px]">
            {t('excelled.title')}
          </p>
          <img
            src="/assets/images/spark-icon.svg"
            className="absolute right-[0px] md:right-[-30px] top-[-40px]"
          />
        </div>
        <p className="font-[400] text-[18px] text-[#939393] leading-[18px]">
          {t('excelled.sub-title')}
        </p>
      </div>
      <Marquee
        className="flex w-[100%]"
        pauseOnHover={true}
        speed={300}
        loop={false}
      >
        {services.map(({ img, title }, index) => (
          <div
            key={index}
            className="cursor-pointer flex-1 mr-[50px] w-[330px] h-[330px] relative"
            style={{
              background: `url('${img}')`,
            }}
          >
            <div className="marquee-item-overlay absolute w-[330px] h-[330px] top-0 left-0 z-10 bg-[rgba(36,154,202,0.5)] rounded-[20px]">
              <p className="absolute bottom-[20px] left-[115px] text-[36px] font-[600] text-center leading-[36px] text-white">
                {t(title)}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ExcelledIndustries;
