import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
  const { t } = useTranslation();
  const keyPoints = [
    'White-label development services with rapid turnaround times.',
    'Unmatched quality for app development agencies and companies.',
    'ROI and margins tailored for app development resellers.',
  ];
  return (
    <div className="md:flex-1">
      <p className="text-white text-[40px] font-bold">
        {t('hero.title.text1')}{' '}
        <span className="text-primary">{t('hero.title.text2')}</span>{' '}
        {t('hero.title.text3')}
      </p>
      <p className="text-white text-[30px]">
        {t('hero.sub-title.text1')}{' '}
        <span className="text-primary">{t('hero.sub-title.text2')}</span>{' '}
        {t('hero.sub-title.text3')}
      </p>
      <p className="text-white text-[18px mt-[15px]">
        {t('hero.description.text1')}
      </p>
      <p className="text-white text-[18px]">{t('hero.description.text2')}</p>
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
          {t('hero.clutch.text-1')}{' '}
          <strong className="mx-2">{t('hero.clutch.text-2')}</strong>{' '}
          {t('hero.clutch.text-3')}
          <img src="/assets/icons/ClutchLogo.png" className="mx-2" />{' '}
          {t('hero.clutch.text-4')}
          <strong className="ml-2">{t('hero.clutch.text-5')}</strong>
        </p>
        <div className="flex md:hidden w-[100%] flex-col gap-[10px]">
          <p className="text-white text-center w-[100%] text-[18px] font-[600]">
            {t('hero.clutch-mob.text-1')}
          </p>
          <img src="/assets/icons/ClutchLogo.png" className="mx-2" />
          <p className="text-white text-center w-[100%] text-[18px] font-[600]">
            {t('hero.clutch-mob.text-2')}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <button className="rounded-[24px] bg-primary border-primary border-2 text-white md:w-[232px] w-[100%] py-[12px]">
          {t('button.create-an-account')}
        </button>
        <button className="rounded-[24px] bg-dark border-primary border-2 mt-[20px] md:mt-[0px] md:ml-[20px] text-white w-[100%] md:w-[168px] py-[12px]">
          {t('button.book-a-call')}
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
