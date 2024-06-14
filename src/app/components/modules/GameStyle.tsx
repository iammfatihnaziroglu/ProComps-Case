import React from "react";
import EngageIcon from "../../../utilities/icons/png/engage.png";
import PickIcon from "../../../utilities/icons/png/pick.png";
import SplitIcon from "../../../utilities/icons/png/split.png";
import SiegeIcon from "../../../utilities/icons/png/siege.png";
import ProtectIcon from "../../../utilities/icons/png/protect.png";

const GameStyle: React.FC = () => {
  return (
    <div className="flex h-[400px] w-[136px] flex-col rounded-lg border border-card_default-500 ">
      <div className="flex flex-col">
        <div id="engageId" className="w-8xl ml-5 flex h-10 gap-2 pt-10">
          <img
            src={EngageIcon}
            alt="Engage Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
            Engage
          </p>
        </div>
        <div id="pickId" className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={PickIcon}
            alt="Pick Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
            Pick
          </p>
        </div>
        <div id="splitId" className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={SplitIcon}
            alt="Split Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
            Split
          </p>
        </div>
        <div id="siegeId" className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={SiegeIcon}
            alt="Siege Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
            Siege
          </p>
        </div>
        <div id="protectId" className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={ProtectIcon}
            alt="Protect Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
            Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameStyle;
