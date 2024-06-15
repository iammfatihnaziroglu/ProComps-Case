import React from "react";
import ArrowUp from "../../../utilities/icons/png/arrow_up.png";
import ArrowDown from "../../../utilities/icons/png/arrow_down.png";

const NameModule: React.FC = () => {
  return (
    <div className="fixed h-32 w-[101px] flex-col rounded-lg border border-card_default-500">
      <div className="ml-4 h-4 w-[61px] pt-4 transition duration-300 ease-in-out">
        <div className="h-4 w-[51px] gap-2">
          <p className="h-4 w-[33px] font-source-sans-pro font-normal leading-4 text-gray-400">
            Name
          </p>
        </div>
      </div>
      <div className="ml-4 flex h-4 w-[61px] flex-row pt-9 transition duration-300 ease-in-out">
        <div className="flex h-4 w-[51px] gap-2">
          <p className="h-4 w-[33px] font-source-sans-pro font-normal leading-4 text-procomps">
            Name
          </p>
          <img
            src={ArrowUp}
            alt="Arrow Up Icon"
            className=" ml-2 mt-[3px] h-[10px] w-[10px]"
          />
        </div>
      </div>
      <div className="ml-4 flex h-4 w-[61px] flex-row pt-9 transition duration-300 ease-in-out">
        <div className="flex h-4 w-[51px] gap-2">
          <p className="h-4 w-[33px] font-source-sans-pro font-normal leading-4 text-procomps">
            Name
          </p>
          <img
            src={ArrowDown}
            alt="Arrow Down Icon"
            className=" ml-2 mt-[3px] h-[10px] w-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NameModule;
