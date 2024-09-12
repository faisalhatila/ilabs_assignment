import React from 'react';

const Footer = () => {
  const contactInfo = [
    {
      img: '/assets/images/e-mail-icon.svg',
      text: 'info@i-labs.app',
    },
    {
      img: '/assets/images/call-icon.svg',
      text: '+34 666286938',
    },
    {
      img: '/assets/images/location-icon.svg',
      text: 'Paseo de la castellana, 43 Madrid',
    },
  ];

  const services = [
    'Mobile App Development',
    'Staff Augmentation',
    'iOS Development',
    'UX & UI Design',
    'Android Development',
    'Technical Writer',
    'Web App Development',
    'DevOps',
    'Blockchain',
    'Logo Design',
    'Artificial Intelligence',
    'Brand Book',
  ];
  return (
    <>
      <div className="px-[20px] sm:px-[40px] md:px-[10%]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[14px]">
            <img
              src="/assets/images/i-labs-logo.svg"
              className="max-w-[83px]"
            />
            <div>
              {contactInfo.map(({ img, text }, index) => (
                <div className="flex items-center gap-[8px]" key={index}>
                  <img src={img} />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="bg-dark rounded-[16px] p-[15px] flex items-center">
              <img src="/assets/images/footer-image.png" />
              <div className="flex flex-col rounded-[8px] bg-dark gap-[13px] px-[15px] py-[12px] translate-x-[-50px]">
                <p className="text-white text-[22px] leading-[28px] font-[600]">
                  #ilabsapp
                </p>
                <p className="text-white text-[12px] leading-[18px] font-[600] w-[182px]">
                  Use this hashtag to win 5000€ development credits at i labs
                </p>
                <button className="bg-primary border-2 border-primary text-white text-[12px] leading-[18px] font-[600] px-[18px] py-[5px] rounded-[18px] w-[165px]">
                  Visit our socials
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className="text-dark text-[18px] font-[600] leading-[24px]">
              Offices
            </p>
            {['Madrid', 'Dubai', 'London', 'New York'].map((item, index) => (
              <p
                className="text-dark text-[14px] font-[400] leading-[24px]"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className="text-dark text-[18px] font-[600] leading-[24px]">
              Offices
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[86px] gap-y-[17px]">
              {services.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark px-[20px] sm:px-[40px] md:px-[10%] flex items-center justify-between mt-[30px] py-[17px]">
        <p className="text-[#939393] text-[12px] font-[400] leading-[18px]">
          &copy; {new Date().getFullYear()} I-Labs.app All rights reserved
        </p>
        <div className="flex items-center gap-[16px]">
          {['facebook', 'insta', 'linked-in', 'twitter', 'youtube'].map(
            (item, index) => (
              <img src={`/assets/images/${item}.svg`} key={index} />
            )
          )}
        </div>
        <div className="flex items-center gap-[23px]">
          <p className="text-white text-[12px] font-[400] leading-[18px]">
            Terms of Service
          </p>
          <p className="text-white text-[12px] font-[400] leading-[18px]">
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
