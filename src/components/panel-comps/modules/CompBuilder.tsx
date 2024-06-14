import React from "react";
import BuilderIcon from "../../../utilities/images/png/builder-icon.png";
import BuilderWhiteIcon from "../../../utilities/images/png/builder-icon_white.png";

const CompBuilder: React.FC = () => {
  return (
    <div className="flex h-[136px] w-20 flex-col rounded-lg border border-card_default-500">
      <div className="ml-5 h-10 w-10 pt-5">
        <div className="border-builder  h-10 w-10 rounded-full border">
          <div className="ml-[8.5px] mt-[8.5px] flex h-5 w-5 flex-col items-center justify-center">
            <img
              src={BuilderIcon}
              alt="Builder Icon"
              className="h-[15.46px] w-[16.5px]"
            />
          </div>
        </div>
      </div>
      <div className="ml-5 h-10 w-10 pt-10">
        <div className="h-10 w-10 rounded-full border border-procomps bg-procomps">
          <div className="ml-[8.5px] mt-[8.5px] flex h-5 w-5 flex-col items-center justify-center">
            <img
              src={BuilderWhiteIcon}
              alt="Builder White Icon"
              className="h-[15.46px] w-[16.5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompBuilder;
