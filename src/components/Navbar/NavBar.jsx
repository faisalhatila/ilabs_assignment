import React from 'react';
import ActionItems from './ActionItems';
import Logo from './Logo';
import NavItems from './NavItems';

const NavBar = () => {
  return (
    <div className="hidden md:flex px-[20px] sm:px-[40px] md:px-[10%] py-[20px] justify-between items-center">
      <Logo />
      <NavItems />
      <ActionItems />
    </div>
  );
};

export default NavBar;
