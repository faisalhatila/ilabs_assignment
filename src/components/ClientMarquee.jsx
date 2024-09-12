import { useState } from 'react';
import Marquee from 'react-fast-marquee';

const ClientMarquee = ({ logos }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="overflow-hidden relative w-full my-[20px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex space-x-8 `}>
        {/* Repeat the logos twice to create a continuous loop */}
        {/* {logos.map((logo, idx) => (
          <div key={idx} className="w-32 h-32 flex-shrink-0">
            <img
              src={logo}
              alt={`client logo ${idx}`}
              className="max-w-[50%] object-contain filter grayscale h-[80px]"
            />
          </div>
        ))} */}
        <Marquee className="flex w-[100%]" pauseOnHover={true} speed={300}>
          {logos.map((logo, idx) => (
            <div key={idx} className="flex-1 flex-shrink-0 mr-[150px]">
              <img
                src={logo}
                alt={`client logo ${idx}`}
                className="max-w-[90px] object-contain filter grayscale h-[80px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientMarquee;
