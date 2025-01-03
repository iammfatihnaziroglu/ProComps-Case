import React from "react";
import PopUpExit from "../../../utilities/icons/png/popup_exit.png";
import AkaliAvatar from "../../../utilities/champions/Akali.png";
import BriarAvatar from "../../../utilities/champions/Briar.png";
import AhriAvatar from "../../../utilities/champions/Ahri.png";
import AsheAvatar from "../../../utilities/champions/Ashe.png";
import BrandAvatar from "../../../utilities/champions/Brand.png";
import ProtectIcon from "../../../utilities/icons/png/protect.png";

interface PopUpProps {
  name: string;
  gamestyle: {
    name: string;
    icon: string;
  };
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ name, gamestyle, onClose }) => {
  // Truncate the name if it's longer than 30 characters
  const truncatedName = name.length > 17 ? `${name.substring(0, 14)}...` : name;

  return (
    <div className="ml-[295px] mt-[65px] flex h-[262px] w-[400px] items-center justify-center">
      <div className="relative h-full w-full rounded-[16px] bg-black">
        <div
          onClick={onClose}
          className=" ml-[376px] mt-2 flex h-4 w-4 items-start justify-end"
        >
          <img
            src={PopUpExit}
            alt="Pop Up Exit"
            className=" h-[10px] w-[10px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="ml-[100px] mt-6 flex h-10 w-[200px] flex-row flex-nowrap justify-center font-unbounded text-[16px] font-normal leading-5 text-compName-white">
            {truncatedName}
          </p>
          <p className="-mt-4 ml-[100px] flex h-10 w-[200px] flex-nowrap justify-center text-center font-source-sans-pro text-[16px] font-normal leading-5 text-compName-white">
            8 hours ago
          </p>
        </div>
        <div className="ml-9 flex h-10 w-48 justify-center ">
          <div className="ml-8 flex h-auto w-auto items-center ">
            <img
              src={AkaliAvatar}
              alt="Akali Avatar"
              className="h-14 w-14 rounded-[75px] border-[2.4px] border-black"
            />
            <img
              src={BriarAvatar}
              alt="Briar Avatar"
              className="-ml-[5px] h-14 w-14 rounded-[75px] border-[2.4px] border-black"
            />
            <img
              src={AhriAvatar}
              alt="Ahri Avatar"
              className="-ml-[5px] h-14 w-14 rounded-[48.12px] border-[3px] border-black"
            />
            <img
              src={AsheAvatar}
              alt="Ashe Avatar"
              className="-ml-[5px] h-14 w-14 rounded-[75px] border-[2.4px] border-black"
            />
            <img
              src={BrandAvatar}
              alt="Brand Avatar"
              className="-ml-[5px] h-14 w-14 rounded-[68.5px] border-[2.4px] border-black"
            />
          </div>
        </div>
        <div className="ml-[108px] mt-8 flex h-10 w-[184px] flex-row items-center justify-center gap-6 ">
          <div className="flex h-10 w-[96px] flex-row items-center justify-center gap-2">
            <img
              src={gamestyle.icon}
              alt={`${gamestyle.name} icon`}
              className="h-6 w-6"
            />
            <p className="flex h-8 w-[64px] items-center font-source-sans-pro text-[16px] font-normal leading-5 text-gray-400">
              {gamestyle.name}
            </p>
          </div>
          <div className=" flex h-10 w-16 flex-row items-center gap-2">
            <div className="h-1 w-4 rounded-lg bg-scaling-green"></div>
            <div className="h-1 w-4 rounded-lg bg-scaling-orange"></div>
            <div className="h-1 w-4 rounded-lg bg-scaling-red"></div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
