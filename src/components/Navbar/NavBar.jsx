import React from 'react';
import ActionItems from './ActionItems';
import Logo from './Logo';
import NavItems from './NavItems';

const NavBar = () => {
  return (
    <div className="px-[20px] sm:px-[40px] md:px-[10%] py-[20px] flex justify-between items-center">
      <Logo />
      <NavItems />
      <ActionItems />
    </div>
  );
};

export default NavBar;
