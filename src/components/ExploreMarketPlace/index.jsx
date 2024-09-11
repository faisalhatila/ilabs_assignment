import React from 'react';
import Card from './Card';

const ExploreMarketPlace = () => {
  const cards = [
    {
      title: 'Logo design / Brand-book',
      img: '/assets/images/explore-market-place/image-1.png',
    },
    {
      title: 'UX/UI Design',
      img: '/assets/images/explore-market-place/image-2.png',
    },
    {
      title: 'App Development',
      img: '/assets/images/explore-market-place/image-3.png',
    },
    {
      title: 'Staff Augmentation',
      img: '/assets/images/explore-market-place/image-4.png',
    },
    {
      title: 'Maintenance/DevOps',
      img: '/assets/images/explore-market-place/image-1.png',
    },
    {
      title: 'SRS Documentation',
      img: '/assets/images/explore-market-place/image-2.png',
    },
  ];
  return (
    <div className="px-[20px] sm:px-[40px] md:px-[10%]">
      <div className="flex justify-between">
        <p className="text-[33px] leading-[45px] font-[600]">
          Explore the marketplace.
        </p>
        <button className="border-[1px] py-[14px] px-[33px] border-dark bg-white h-[33px] rounded-[44px] text-center text-[14px] font-[500] leading-[18px] flex items-center">
          View all services
        </button>
      </div>
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map(({ title, img }, index) => (
          <Card title={title} image={img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMarketPlace;
