import React, { useEffect, useRef } from "react";
import AkaliAvatar from "../../../utilities/champions/Akali.png";
import BriarAvatar from "../../../utilities/champions/Briar.png";
import AhriAvatar from "../../../utilities/champions/Ahri.png";
import AsheAvatar from "../../../utilities/champions/Ashe.png";
import BrandAvatar from "../../../utilities/champions/Brand.png";
import EngageIcon from "../../../utilities/icons/png/engage.png";
import BuilderIcon from "../../../utilities/icons/png/builder-icon.png";

const ListComponent: React.FC = () => {
  return (
    <div className="bg-compName-gray md:min-w-screen group flex h-20 w-[976px] items-center rounded-[200px] hover:bg-delete-gray">
      <div id="delete" className="relative mb-20 hidden group-hover:block">
        <div className="absolute left-[962px] top-[28px]  ">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-delete-border bg-delete-gray">
            <div className="h-[1.13px] w-[9px] rounded-lg bg-scaling-gray"></div>
          </div>
        </div>
      </div>

      <div className="flex h-20 w-[976px] items-center justify-center rounded-[200px] border border-delete-border">
        <div className="flex h-10 w-[896px] flex-row items-center justify-start">
          <div className="flex h-10 w-[816px] flex-row items-center justify-start gap-6">
            <p className="font-unbounded text-compName-white flex h-10 w-[200px] flex-wrap items-center text-nowrap text-[13px] font-normal leading-4">
              CompName Example Win
            </p>
            <div className="w-10 rotate-90 border border-delete-border"></div>
            <div className="flex h-10 w-[568px] flex-row gap-10 ">
              <div className="flex h-10 w-48 justify-center ">
                <div className="flex h-auto w-auto items-center ">
                  <img
                    src={AkaliAvatar}
                    alt="Akali Avatar"
                    className="border-compName-gray h-10 w-10 rounded-[75px] border-[2.4px]"
                  />
                  <img
                    src={BriarAvatar}
                    alt="Briar Avatar"
                    className="border-compName-gray -ml-[5px]  h-10 w-10 rounded-[75px] border-[2.4px]"
                  />
                  <img
                    src={AhriAvatar}
                    alt="Ahri Avatar"
                    className="border-compName-gray -ml-[5px] h-10 w-10 rounded-[48.12px] border-[3px]"
                  />
                  <img
                    src={AsheAvatar}
                    alt="Ashe Avatar"
                    className="border-compName-gray -ml-[5px]  h-10 w-10 rounded-[75px] border-[2.4px]"
                  />
                  <img
                    src={BrandAvatar}
                    alt="Brand Avatar"
                    className="border-compName-gray -ml-[5px] h-10 w-10 rounded-[68.5px] border-[2.4px]"
                  />
                </div>
              </div>
              <div className="flex h-10 w-[320px] flex-row items-center justify-start gap-6 ">
                <div
                  id="engageId"
                  className="w-8xl flex h-10 items-center gap-2"
                >
                  <img
                    src={EngageIcon}
                    alt="Engage Icon"
                    className=" h-6 w-6"
                  />
                  <p className="mt-3 h-8 w-16 font-source-sans-pro font-normal leading-5 text-gray-400 ">
                    Engage
                  </p>
                </div>
                <div className="flex h-[40px] w-[200px] flex-row items-center justify-start gap-10">
                  <div className="flex h-10 w-16 flex-row items-center gap-2">
                    <div className="h-1 w-4 rounded-lg bg-scaling-green"></div>
                    <div className="h-1 w-4 rounded-lg bg-scaling-orange"></div>
                    <div className="h-1 w-4 rounded-lg bg-scaling-red"></div>
                  </div>
                  <p className="flex h-10 w-24 items-center font-source-sans-pro text-[16px] font-normal leading-5 text-gray-400">
                    8 hours ago
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center gap-4 ">
                  <div className="flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-builder">
                      <img
                        src={BuilderIcon}
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

export default ListComponent;
