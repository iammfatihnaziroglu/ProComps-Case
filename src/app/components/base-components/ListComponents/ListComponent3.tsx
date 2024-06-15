import React, { useState } from "react";
import AkaliAvatar from "../../../../utilities/champions/Akali.png";
import BriarAvatar from "../../../../utilities/champions/Briar.png";
import AhriAvatar from "../../../../utilities/champions/Ahri.png";
import AsheAvatar from "../../../../utilities/champions/Ashe.png";
import BrandAvatar from "../../../../utilities/champions/Brand.png";
import SiegeIcon from "../../../../utilities/icons/png/siege.png";
import BuilderIcon from "../../../../utilities/icons/png/builder-icon.png";
import BuilderWhiteIcon from "../../../../utilities/icons/png/builder-icon_white.png";

interface ListComponentProps {
  onDelete: () => void;
}
const ListComponent3: React.FC<ListComponentProps> = ({ onDelete }) => {
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isBuilderHovered, setIsBuilderHovered] = useState(false);

  return (
    <div className="md:min-w-screen group flex h-20 w-[976px] items-center rounded-[200px] bg-compName-gray hover:bg-delete-gray">
      <div
        onClick={onDelete}
        className="relative mb-20 hidden group-hover:block"
        onMouseEnter={() => setIsDeleteHovered(true)}
        onMouseLeave={() => setIsDeleteHovered(false)}
      >
        <div className="absolute left-[962px] top-[28px]">
          <div
            onClick={onDelete}
            className={`flex h-6 w-6 items-center justify-center rounded-full border border-delete-border ${
              isDeleteHovered ? "bg-delete-red" : "bg-delete-gray"
            }`}
          >
            <div
              id="white"
              className={`h-[1.13px] w-[9px] rounded-lg bg-scaling-gray ${
                isDeleteHovered ? "bg-white" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex h-20 w-[976px] items-center justify-center rounded-[200px] border border-delete-border">
        <div className="flex h-10 w-[896px] flex-row items-center justify-start">
          <div className="flex h-10 w-[848px] flex-row items-center justify-start gap-6">
            <p className="flex h-10 w-[200px] flex-wrap items-center text-wrap break-words font-unbounded text-[13px] font-normal leading-4 text-compName-white">
              Favorite comp for scaling into the late game
            </p>
            <div className="-ml-3 flex w-10 rotate-90 border border-delete-border ps-1"></div>
            <div className="flex h-10 w-[568px] flex-row gap-10 ">
              <div className="flex h-10 w-48 justify-center ">
                <div className="-ml-16 flex h-auto w-auto items-center ">
                  <img
                    src={AkaliAvatar}
                    alt="Akali Avatar"
                    className="h-10 w-10 rounded-[75px] border-[2.4px] border-compName-gray"
                  />
                  <img
                    src={BriarAvatar}
                    alt="Briar Avatar"
                    className="-ml-[5px] h-10  w-10 rounded-[75px] border-[2.4px] border-compName-gray"
                  />
                  <img
                    src={AhriAvatar}
                    alt="Ahri Avatar"
                    className="-ml-[5px] h-10 w-10 rounded-[48.12px] border-[3px] border-compName-gray"
                  />
                  <img
                    src={AsheAvatar}
                    alt="Ashe Avatar"
                    className="-ml-[5px] h-10  w-10 rounded-[75px] border-[2.4px] border-compName-gray"
                  />
                  <img
                    src={BrandAvatar}
                    alt="Brand Avatar"
                    className="-ml-[5px] h-10 w-10 rounded-[68.5px] border-[2.4px] border-compName-gray"
                  />
                </div>
              </div>
              <div className="-pl-10 -ml-7 flex h-10 w-[320px] flex-row items-center justify-start gap-6  ">
                <div
                  id="engageId"
                  className="flex h-10 w-24 items-center gap-2"
                >
                  <img src={SiegeIcon} alt="Siege Icon" className=" h-6 w-6" />
                  <p className="mt-3 h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
                    Siege
                  </p>
                </div>
                <div className="ml-6 flex h-[40px] w-[200px] flex-row items-center justify-end gap-10">
                  <div className="flex h-10 w-16 flex-row items-center gap-2">
                    <div className="h-1 w-4 rounded-lg bg-scaling-red"></div>
                    <div className="h-1 w-4 rounded-lg bg-scaling-green"></div>
                    <div className="h-1 w-4 rounded-lg bg-scaling-orange"></div>
                  </div>
                  <p className="flex h-10 w-24 items-center font-source-sans-pro text-[16px] font-normal leading-5 text-gray-400">
                    8 hours ago
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center gap-4 ">
                  <div
                    className="flex items-center justify-center"
                    onMouseEnter={() => setIsBuilderHovered(true)}
                    onMouseLeave={() => setIsBuilderHovered(false)}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-builder ${isBuilderHovered ? "border-procomps bg-procomps" : ""}`}
                    >
                      {/* className={`w-[9px] bg-scaling-gray ${ isDeleteHovered ? "bg-white" : ""}`} */}
                      <img
                        src={isBuilderHovered ? BuilderWhiteIcon : BuilderIcon}
                        alt="Builder Icon"
                        className="h-[15.46px] w-[16.5px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponent3;
