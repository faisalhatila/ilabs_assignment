import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
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
    'service-1',
    'service-2',
    'service-3',
    'service-4',
    'service-5',
    'service-6',
    'service-7',
    'service-8',
    'service-9',
    'service-10',
    'service-11',
    'service-12',
  ];
  return (
    <>
      <div className="px-[20px] sm:px-[40px] md:px-[10%]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-[14px] mb-[50px] md:mb-0">
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
                  {t('footer.card.message')}
                </p>
                <button className="bg-primary border-2 border-primary text-white text-[12px] leading-[18px] font-[600] px-[18px] py-[5px] rounded-[18px] w-[165px]">
                  {t('button.visit-our-socials')}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[17px] mb-[50px] md:mb-0">
            <p className="text-dark text-[18px] font-[600] leading-[24px]">
              {t('footer.offices.title')}
            </p>
            {['location-1', 'location-2', 'location-3', 'location-4'].map(
              (item, index) => (
                <p
                  className="text-dark text-[14px] font-[400] leading-[24px]"
                  key={index}
                >
                  {t(`footer.offices.${item}`)}
                </p>
              )
            )}
          </div>
          <div className="flex flex-col gap-[17px]">
            <p className="text-dark text-[18px] font-[600] leading-[24px]">
              {t('footer.services.title')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[86px] gap-y-[17px]">
              {services.map((item, index) => (
                <p key={index}>{t(`footer.services.${item}`)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark px-[20px] sm:px-[40px] md:px-[10%] flex items-center justify-between mt-[30px] py-[17px]">
        <p className="text-[#939393] text-[12px] font-[400] leading-[18px]">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
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
            {t('footer.terms')}
          </p>
          <p className="text-white text-[12px] font-[400] leading-[18px]">
            {t('footer.privacy-policy')}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
