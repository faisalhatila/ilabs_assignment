import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="relative group overflow-hidden rounded-[16px] h-[362px] w-full">
      {/* Background image */}
      <div
        className="relative h-full w-full bg-cover bg-center grayscale transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      {/* Overlay */}
      <div className="card-overlay-wrapper absolute inset-0 bg-[rgba(36,154,202,0.7)] z-0">
        {/* Title with overlay */}
        <div className="card-text-wrapper absolute left-[22px] top-[22px] inset-0 z-10">
          <p className="text-white font-[600] leading-[25px] text-[20px] bg-black bg-opacity-50 p-2 rounded w-fit">
            {title}
          </p>
        </div>
        <div className="absolute card-footer-text-wrapper bottom-[26px] right-[20px] flex items-center gap-[13px]">
          <p className="text-white text-[14px] font-[400] leading-[24px]">
            Explore{' '}
          </p>
          <img src="/assets/images/explore-arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default Card;
