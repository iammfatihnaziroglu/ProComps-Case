import React, { useEffect, useRef } from "react";
import AkaliAvatar from "../../../utilities/champions/Akali.png";
import BriarAvatar from "../../../utilities/champions/Briar.png";
import AhriAvatar from "../../../utilities/champions/Ahri.png";
import AsheAvatar from "../../../utilities/champions/Ashe.png";
import BrandAvatar from "../../../utilities/champions/Brand.png";
import GameStyle from "../modules/GameStyle";

const ListComponent1: React.FC = () => {
  return (
    <div className="bg-compName-gray md:min-w-screen flex h-20 w-[976px] items-center rounded-[200px]">
      <div className="flex h-20 w-[976px] items-center justify-center rounded-[200px] border border-delete-border">
        <div className="flex h-10 w-[896px] flex-row items-center justify-start">
          <div className="flex h-10 w-[816px] flex-row items-center justify-start gap-6">
            <p className="font-unbounded text-compName-white flex h-10 w-[200px] flex-wrap items-center text-nowrap text-[13px] font-normal leading-4">
              CompName Example Win
            </p>
            <div className="w-10 rotate-90 border border-delete-border"></div>
            <div className="flex h-10 w-[568px] flex-row gap-10 ">
              <div className="flex h-10 w-48 justify-center bg-red-900">
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
              <div className="flex h-10 w-[320px] flex-row items-center justify-start gap-6 bg-blue-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponent1;
