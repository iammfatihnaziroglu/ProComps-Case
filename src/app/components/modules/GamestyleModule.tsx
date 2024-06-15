import React, { useState, useEffect } from "react";
import ArrowIcon from "../../../utilities/icons/png/arrow_up.png";

interface GameStylesProps {
  onClick: (clickCount: number) => void;
}

const GameStyles: React.FC<GameStylesProps> = ({ onClick }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newClickCount = (clickCount + 1) % 3;
    setClickCount(newClickCount);
    onClick(newClickCount); // Yeni clickCount değerini CompsPage'e iletin
  };

  const getNameStyle = () => {
    if (clickCount > 0) return "text-procomps";
    return "text-gray-400";
  };

  const getIconRotation = () => {
    if (clickCount === 1) return "rotate-0";
    if (clickCount === 2) return "rotate-180";
    return "";
  };

  return (
    <div
      className="flex h-32 w-[101px] cursor-pointer flex-col items-center justify-center rounded-lg"
      onClick={handleClick}
    >
      <div className="-ml-10 flex h-4 w-[61px] items-center transition duration-300 ease-in-out">
        <p
          className={`h-4 w-[33px] font-source-sans-pro text-[13px] font-normal leading-4 ${getNameStyle()}`}
        >
          Gamestyle
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

export default GameStyles;
