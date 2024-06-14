import React from "react";
import EngageIcon from "../../../utilities/images/png/engage.png";
import PickIcon from "../../../utilities/images/png/pick.png";
import SplitIcon from "../../../utilities/images/png/split.png";
import SiegeIcon from "../../../utilities/images/png/siege.png";
import ProtectIcon from "../../../utilities/images/png/protect.png";

const GameStyle: React.FC = () => {
  return (
    <div className="border-card_default-500 flex h-[400px] w-[136px] flex-col rounded-lg border ">
      <div className="flex flex-col">
        <div className="w-8xl ml-5 flex h-10 gap-2 pt-10">
          <img
            src={EngageIcon}
            alt="Engage Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="font-source-sans-pro h-8 w-16 font-normal leading-5 text-gray-400 ">
            Engage
          </p>
        </div>
        <div className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={PickIcon}
            alt="Pick Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="font-source-sans-pro h-8 w-16 font-normal leading-5 text-gray-400 ">
            Pick
          </p>
        </div>
        <div className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={SplitIcon}
            alt="Split Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="font-source-sans-pro h-8 w-16 font-normal leading-5 text-gray-400 ">
            Split
          </p>
        </div>
        <div className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={SiegeIcon}
            alt="Siege Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="font-source-sans-pro h-8 w-16 font-normal leading-5 text-gray-400 ">
            Siege
          </p>
        </div>
        <div className="w-8xl ml-5 flex h-10 gap-2 pt-20 ">
          <img
            src={ProtectIcon}
            alt="Protect Icon"
            className="mt-[-2.36px] h-6 w-6"
          />
          <p className="font-source-sans-pro h-8 w-16 font-normal leading-5 text-gray-400 ">
            Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameStyle;
