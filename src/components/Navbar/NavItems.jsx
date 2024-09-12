import React from 'react';
import { useTranslation } from 'react-i18next';

const NavItems = () => {
  const { t } = useTranslation();
  return (
    <ul className="hidden list-none text-white md:flex items-center">
      <li className="text-[26px] text-white font-[500] leading-normal mr-4">
        {t('nav.item-1')}
      </li>
      <li className="text-[26px] text-white font-[500] leading-normal">
        {t('nav.item-2')}
      </li>
    </ul>
  );
};

export default NavItems;
