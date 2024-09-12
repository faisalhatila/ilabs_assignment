import React from 'react';

const ReviewsAboutUs = () => {
  const testimonials = [
    {
      name: 'Haji',
      message: 'Easy Process. All good. I will be back',
      time: '12 days ago',
    },
    {
      name: 'YUBAN TABORDA',
      message: 'Very easy and clear steps.',
      time: '12 days ago',
    },
    {
      name: 'Chris Walters',
      message: 'Easy to use and navigate.',
      time: '12 days ago',
    },
  ];
  return (
    <div className="hidden md:block px-[20px] py-[112px] sm:px-[40px] md:px-[10%]">
      <p className="text-dark text-[38px] font-[600] leading-[45px] text-center">
        What clients and agencies say about us
      </p>
      <p className="text-[#647488] text-[18px] font-[400] leading-[24px] text-center">
        Check feedback from agencies, in-house marketing teams, and individuals
        like you have to say!
      </p>
      <div className="flex items-center mt-[80px]">
        <div className="flex-1 flex flex-col translate-y-20">
          <p className="text-dark text-[48px] leading-[56px] font-[600]">95%</p>
          <p className="text-[#64748B] text-[16px] leading-[24px] font-[400]">
            of customers that buy from this merchant give them a 5-star rating
          </p>
        </div>
        <div className="flex-1 flex justify-center translate-y-10">
          <img src="/assets/images/connection-img.svg" />
        </div>
        <div className="flex-1 flex flex-col items-center translate-y-10">
          <p className="text-[#64748B] text-[16px] leading-[24px] font-[400] text-center">
            Overall Rating
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <img key={index} src="/assets/images/filled-star.svg" />
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/images/connection-img.svg" />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-dark text-[48px] leading-[56px] font-[600]">
            5 / 5
          </p>
          <div className="flex flex-col">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div className="flex items-center gap-[5px]">
                <p className="text-dark text-[16px] leading-[24px] font-[400] text-center w-[55px]">{`${star} Stars`}</p>
                <div
                  className={`${
                    index === 0 ? 'bg-dark' : 'bg-[#F3F3F3]'
                  } w-[238px] h-[5px] rounded-[5px]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-20 gap-[20px]">
        <div className="flex-1 flex gap-[8px] flex-col items-center rounded 10px shadow-md py-[42px] px-[27px]">
          <p className="text-dark text-[18px] font-[600] leading-[24px]">
            Excellent
          </p>
          <div className="flex items-center gap-[8px]">
            {[...Array(5)].map((_, index) => (
              <img src="/assets/images/filled-primary-star.svg" key={index} />
            ))}
          </div>
          <p>Based on 1352 reviews</p>
          <img src="/assets/icons/ClutchIconDark.svg" />
        </div>
        {testimonials.map(({ name, time, message }, index) => (
          <div key={index} className="flex-1 flex-col shadow-md rounded p-3">
            <div className="flex justify-between mb-[15px]">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <img
                    src="/assets/images/filled-primary-star.svg"
                    key={index}
                    className="max-w-[20px]"
                  />
                ))}
              </div>
              <p className="text-[14px] font-[400] leading-[18px] text-[#64748B]">
                {time}
              </p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <p className="text-[12px] font-[400] leading-[18px] text-[#64748B]">
                {message}
              </p>
              <div className="w-[60px] border-2 border-[#939393]" />
              <p className="text-[14px] font-[400] leading-[24px] text-dark">
                {name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-dark px-[32px] py-[14px] mt-[40px] rounded-[44px]">
          See more reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewsAboutUs;
