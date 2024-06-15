import React, { useState } from "react";
import ArrowIcon from "../../../utilities/icons/png/arrow_up.png"; // Tek bir icon kullanacağız, sadece döndürme işlemi yapacağız.

const Gamestyles: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
  };

  const getNameStyle = () => {
    if (clickCount > 0) return "text-procomps";
    return "text-gray-400";
  };

  const getIconRotation = () => {
    if (clickCount === 1) return "rotate-0"; // İlk tıklama
    if (clickCount === 2) return "rotate-180"; // İkinci tıklama
    return ""; // Varsayılan durum (ilk hali)
  };

  return (
    <div
      className="flex h-32 w-[101px] cursor-pointer flex-col items-center justify-center rounded-lg"
      onClick={handleClick}
    >
      <div className="-ml-10  flex h-4 w-[61px] items-center transition duration-300 ease-in-out">
        <p
          className={`h-4 w-[33px] font-source-sans-pro text-[13px] font-normal leading-4 ${getNameStyle()}`}
        >
          Gamestyles
        </p>
        {clickCount > 0 && (
          <img
            src={ArrowIcon}
            alt="Arrow Icon"
            className={`ml-10 mt-[1px] h-[10px] w-[10px] transition-transform duration-300 ease-in-out ${getIconRotation()}`}
          />
        )}
      </div>
    </div>
  );
};

export default Gamestyles;
