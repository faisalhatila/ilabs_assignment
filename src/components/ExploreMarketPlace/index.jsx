import React from 'react';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const ExploreMarketPlace = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: 'market-place.services.service-1',
      img: '/assets/images/explore-market-place/image-1.png',
    },
    {
      title: 'market-place.services.service-2',
      img: '/assets/images/explore-market-place/image-2.png',
    },
    {
      title: 'market-place.services.service-3',
      img: '/assets/images/explore-market-place/image-3.png',
    },
    {
      title: 'market-place.services.service-4',
      img: '/assets/images/explore-market-place/image-4.png',
    },
    {
      title: 'market-place.services.service-5',
      img: '/assets/images/explore-market-place/image-1.png',
    },
    {
      title: 'market-place.services.service-6',
      img: '/assets/images/explore-market-place/image-2.png',
    },
  ];
  const inHouseBenefits = [
    {
      img: '/assets/icons/satisfactino-guranteed.svg',
      title: 'market-place.we-got-solution.items.item-1-title',
      description: 'market-place.we-got-solution.items.item-1-description',
    },
    {
      img: '/assets/icons/exceptional-support.svg',
      title: 'market-place.we-got-solution.items.item-2-title',
      description: 'market-place.we-got-solution.items.item-2-description',
    },
    {
      img: '/assets/icons/streamlined-management.svg',
      title: 'market-place.we-got-solution.items.item-3-title',
      description: 'market-place.we-got-solution.items.item-3-description',
    },
    {
      img: '/assets/icons/satisfactino-guranteed.svg',
      title: 'market-place.we-got-solution.items.item-4-title',
      description: 'market-place.we-got-solution.items.item-4-description',
    },
  ];
  return (
    <div className="px-[20px] sm:px-[40px] md:px-[10%]">
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-[33px] leading-[45px] font-[600]">
          {t('market-place.title')}
        </p>
        <button className="mt-[10px] md:mt-[0px] border-[1px] py-[14px] px-[33px] border-dark bg-white h-[33px] rounded-[44px] text-center text-[14px] font-[500] leading-[18px] flex items-center justify-center">
          {t('button.view-all-services')}
        </button>
      </div>
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map(({ title, img }, index) => (
          <Card title={title} image={img} key={index} />
        ))}
      </div>
      <div className="my-[112px]">
        <div className="relative md:max-w-[492px]">
          <p className="text-[#64748B] text-[18px] font-[400] leading-[24px]">
            {t('market-place.we-got-solution.small-title')}
          </p>
          <p className="text-dark text-[38px] font-[600] leading-[45px]">
            {t('market-place.we-got-solution.title')}
          </p>
          <img
            className="absolute right-0 top-0"
            src="/assets/images/In-house-title-art-img.svg"
          />
        </div>
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-4 gap-4">
          {inHouseBenefits.map(({ title, description, img }, index) => (
            <div>
              <div className="relative w-[40px] h-[40px] bg-primary rounded-[50%]">
                <img
                  src={img}
                  className="absolute right-[-6px] bottom-[-6px]"
                />
              </div>
              <p className="text-dark text-[22px] font-[600] leading-[120%] my-[20px]">
                {t(title)}
              </p>
              <p className="max-w-[287px] text-[#64748B] text-[16px] font-[400] leading-normal">
                {t(description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMarketPlace;
