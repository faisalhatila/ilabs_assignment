import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Maqruee = ({ list = [] }) => {
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const renderMarquee = () => {
    return list.map(({ img, title }) => (
      <div className="flex-1 border-[1px] relative border-primary mb-3 rounded-[25px] overflow-hidden">
        <div
          className={`w-[100%] flex ${
            title === 'Custom Dashboard' && 'pt-3'
          } justify-center`}
        >
          <img className="mb-2 rounded" src={img} />
        </div>
        <p className="text-white absolute bottom-[10px] left-[10px]">
          {t(title)}
        </p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col flex-1 gap-[10px]">{renderMarquee()}</div>
  );
};

export default Maqruee;
