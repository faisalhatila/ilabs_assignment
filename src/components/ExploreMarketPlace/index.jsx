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
  const inHouseBenefits = [
    {
      img: '/assets/icons/satisfactino-guranteed.svg',
      title: 'White Label Services',
      description: 'White-label services crafted for agencies to resell.',
    },
    {
      img: '/assets/icons/exceptional-support.svg',
      title: 'Exceptional Support',
      description: 'A dedicated team available by phone and email',
    },
    {
      img: '/assets/icons/streamlined-management.svg',
      title: 'Streamlined Management',
      description: 'No need to juggle multiple freelancers and vendors',
    },
    {
      img: '/assets/icons/satisfactino-guranteed.svg',
      title: 'Satisfaction Guarantee',
      description: 'Full refund on all our services if you’re not satisfied',
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
      <div className="my-[112px]">
        <div className="relative md:max-w-[492px]">
          <p className="text-[#64748B] text-[18px] font-[400] leading-[24px]">
            We’ve got the solution.
          </p>
          <p className="text-dark text-[38px] font-[600] leading-[45px]">
            In-house vs freelancers? Neither.
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
  );
};

export default ExploreMarketPlace;
