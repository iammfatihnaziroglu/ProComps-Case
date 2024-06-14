import React from "react";
import BuilderIcon from "../../../utilities/icons/png/builder-icon.png";
import BuilderWhiteIcon from "../../../utilities/icons/png/builder-icon_white.png";

const CompBuilder: React.FC = () => {
  return (
    <div className="flex h-[136px] w-20 flex-col rounded-lg border border-card_default-500">
      <div className="flex items-center justify-center pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-builder">
          <img
            src={BuilderIcon}
            alt="Builder Icon"
            className="h-[15.46px] w-[16.5px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-procomps bg-procomps">
          <img
            src={BuilderWhiteIcon}
            alt="Builder White Icon"
            className="h-[15.46px] w-[16.5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CompBuilder;
