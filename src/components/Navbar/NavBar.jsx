import React, { useEffect, useRef, useState } from 'react';
import ActionItems from './ActionItems';
import Logo from './Logo';
import NavItems from './NavItems';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import i18n from '../../il8n';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpenMobMenu, setisOpenMobMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleAvatarClick = () => {
    setDropdownOpen((ps) => !ps);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleHamburgerClick = () => {
    setisOpenMobMenu((prev) => !prev);
  };

  const languages = [
    {
      value: 'en',
      fullForm: 'English',
    },
    {
      value: 'es',
      fullForm: 'Spanish',
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  useEffect(() => {
    setSelectedLanguage(i18n.language);
    localStorage.setItem('selectedLanguage', i18n.language);
  }, []);

  const handleChangeLanguage = (lang) => {
    console.log({ lang, i18n });
    setSelectedLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex px-[20px] sm:px-[40px] md:px-[10%] py-[20px] justify-between items-center">
      <Logo />
      <NavItems />
      <ActionItems
        changeLanguage={handleChangeLanguage}
        languages={languages}
        selectedLanguage={selectedLanguage}
      />

      {/* Mobile Menu */}
      <div
        style={{
          zIndex: 1000,
        }}
        className={`mobile-menu block md:hidden fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.8)] p-[20px] transition-transform duration-300 ease-in-out ${
          isOpenMobMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center">
          <img src="/assets/images/company-logo.png" alt="Logo" />
          <IoClose onClick={handleHamburgerClick} color="#fff" size={40} />
        </div>

        <div className="flex flex-col mt-[50px]">
          <p className="text-[26px] text-white font-[500] leading-normal">
            {t('nav.item-1')}
          </p>
          <p className="text-[26px] text-white font-[500] leading-normal">
            {t('nav.item-2')}
          </p>
        </div>

        {/* Dropdown */}
        <div className="flex flex-col mt-[50px]">
          <div
            className="border-2 rounded-[50%] border-white w-[50px] h-[50px] flex items-center justify-center relative"
            ref={dropdownRef}
            onClick={handleAvatarClick}
          >
            <p className="text-white uppercase">{selectedLanguage}</p>
            <div
              style={{
                zIndex: 100,
              }}
              className={`absolute overflow-hidden top-[50px] left-[0px] mt-2 w-48 bg-white dark:bg-darkprimary border border-border rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? 'opacity-100 transform scale-100'
                  : 'opacity-0 transform scale-95 pointer-events-none'
              }`}
            >
              <ul>
                {languages.map(({ value, fullForm }, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedLanguage(value)}
                    className="px-4 py-2 text-[26px] bg-darkprimary text-dark hover:bg-white hover:text-darkprimary cursor-pointer"
                  >
                    {fullForm}
                  </li>
                ))}
                {/* <li
                  onClick={() => console.log('Settings')}
                  className="px-4 py-2 text-[26px] bg-darkprimary text-dark hover:bg-white hover:text-darkprimary cursor-pointer"
                >
                  Spanish
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-2 rounded-[25px] border-white px-3 w-[250px] my-[30px] h-[50px] flex items-center justify-center">
            <p className="text-white">{t('button.login')}</p>
          </div>
          <div className="bg-primary border-2 rounded-[25px] border-primary px-3 w-[250px] h-[50px] flex items-center justify-center">
            <p className="text-white">{t('button.create-account')}</p>
          </div>
        </div>
      </div>

      {/* Hamburger Icon */}
      <GiHamburgerMenu
        className="block md:hidden"
        onClick={handleHamburgerClick}
        color="#fff"
        size={40}
      />
    </div>
  );
};

export default NavBar;
