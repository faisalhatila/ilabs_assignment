import React from 'react';
import HeroContent from '../components/Hero/HeroContent';
import Maqruee from '../components/Hero/Maqruee';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {
  const marqueeList = [
    {
      id: 1,
      list: [
        {
          id: '1-1',
          img: '/assets/images/Marquee1-1.png',
          title: 'hero.marquee.text-1',
          style: '',
        },
        {
          id: '1-2',
          img: '/assets/images/Marquee1-2.png',
          title: 'hero.marquee.text-2',
        },
        {
          id: '1-3',
          img: '/assets/images/Marquee1-3.png',
          title: 'hero.marquee.text-3',
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          id: '2-1',
          img: '/assets/images/Marquee2-1.png',
          title: 'hero.marquee.text-4',
        },
        {
          id: '2-2',
          img: '/assets/images/Marquee2-2.png',
          title: 'hero.marquee.text-5',
        },
        {
          id: '2-3',
          img: '/assets/images/Marquee2-3.png',
          title: 'hero.marquee.text-6',
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          id: '3-1',
          img: '/assets/images/Marquee3-1.png',
          title: 'hero.marquee.text-7',
        },
        {
          id: '3-2',
          img: '/assets/images/Marquee3-2.png',
          title: 'hero.marquee.text-8',
        },
      ],
    },
  ];
  return (
    <div className="bg-dark h-screen flex flex-col">
      <NavBar />
      <div className="px-[20px] sm:px-[40px] md:px-[10%] flex justify-center md:justify-start flex-col md:flex-row items-center flex-1">
        <HeroContent />
        <div className="marquee-wrapper z-10 flex-1 h-[80%] hidden md:flex gap-[10px] relative before:content-[''] before:absolute before:w-[100%] before:h-[50px] before:bg-[rgba(0,0,0,0.6)] after:content-[''] after:absolute after:w-[100%] after:h-[50px] after:bg-[rgba(0,0,0,0.6)]">
          {marqueeList.map(({ id, list }) => (
            <Maqruee list={list} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
