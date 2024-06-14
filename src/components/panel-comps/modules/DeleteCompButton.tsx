import React from "react";
import BuilderIcon from "../../../utilities/images/png/builder-icon.png";
import BuilderWhiteIcon from "../../../utilities/images/png/builder-icon_white.png";

const DeleteComp: React.FC = () => {
  return (
    <div className="flex h-[136px] w-20 flex-col rounded-lg border border-card_default-500">
      <div className="flex items-center justify-center pt-[28px]">
        <div className="border-delete-border bg-delete-gray flex h-6 w-6 items-center justify-center rounded-full border">
          <div className="bg-scaling-gray h-[1.13px] w-[9px] rounded-lg"></div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[28px]">
        <div className="border-delete-border bg-delete-red flex h-6 w-6 items-center justify-center rounded-full border">
          <div className="bg-scaling-white h-[1.13px] w-[9px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComp;
