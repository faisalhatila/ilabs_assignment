import React from 'react';
import { useTranslation } from 'react-i18next';

const NoHassle = () => {
  const { t } = useTranslation();
  const companyInfoNums = [
    {
      title: '2019',
      text: 'no-hassle.items.text-1',
    },
    {
      title: '400+',
      text: 'no-hassle.items.text-2',
    },
    {
      title: '5+',
      text: 'no-hassle.items.text-3',
    },
  ];
  return (
    <div className="px-[20px] sm:px-[40px] md:px-[10%] py-[112px]">
      <div className="bg-dark rounded-[16px] px-[55px] py-[30px] flex-col md:flex-row flex justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-[30px]">
          <p className="text-[40px] text-white md:w-[424px] leading-[50px] font-[600]">
            {t('no-hassle.title')}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-[60px]">
            {companyInfoNums.map(({ title, text }, index) => (
              <div className="flex flex-col items-center gap-[5px]" key={index}>
                <p className="text-[35px] text-white leading-[35px] font-[600]">
                  {title}
                </p>
                <p className="text-[16px] text-[#939393] leading-[24px] font-[400]">
                  {t(text)}
                </p>
              </div>
            ))}
          </div>
          <button className="w-[234px] mb-[50px] md:mb-0 py-[15px] bg-primary border-2 border-primary rounded-[40px] text-white">
            Create an Account
          </button>
        </div>
        <div>
          <img src="/assets/images/Announcement.png" />
        </div>
      </div>
    </div>
  );
};

export default NoHassle;
