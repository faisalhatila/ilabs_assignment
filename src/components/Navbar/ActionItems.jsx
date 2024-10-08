import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ActionItems = ({ selectedLanguage, changeLanguage, languages }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
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
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:flex items-center cursor-pointer">
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
            className={`absolute overflow-hidden top-[50px] right-[0px] mt-2 w-48 bg-white dark:bg-darkprimary border border-border rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              isDropdownOpen
                ? 'opacity-100 transform scale-100'
                : 'opacity-0 transform scale-95 pointer-events-none'
            }`}
          >
            <ul>
              {languages.map(({ value, fullForm }, index) => (
                <li
                  key={index}
                  onClick={() => changeLanguage(value)}
                  className="px-4 py-2 bg-darkprimary text-dark hover:bg-white hover:text-darkprimary cursor-pointer"
                >
                  {fullForm}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-2 mx-5 rounded-[25px] border-white px-3 min-w-[120px] h-[50px] flex items-center justify-center">
          <p className="text-white">{t('button.login')}</p>
        </div>
        <div className="bg-primary border-2 rounded-[25px] border-primary px-3 w-[180px] h-[50px] flex items-center justify-center">
          <p className="text-white">{t('button.create-account')}</p>
        </div>
      </div>
    </>
  );
};

export default ActionItems;
