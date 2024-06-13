import React from "react";
import CheckIcon from "../../../utilities/images/png/check-icon.png";

const SectionLabel: React.FC = () => {
  return (
    <div className="shadow-opacity-6 w-full gap-[32px] rounded-lg border border-neutrals-300 bg-neutrals-50 p-[32px] shadow md:h-[auto] md:w-[560px]">
      <div className="h-[142px] w-full gap-[12px] pb-3 md:h-[auto] md:w-[464px]">
        <button className="p-[4px, 12px, 4px, 8px] border-neutrals-400 flex h-[28px] w-[85px] items-center justify-center gap-2 rounded-full border border-opacity-10 bg-lime-100">
          <div className="flex h-[14px] w-[65px] items-center gap-2">
            <img src={CheckIcon} alt="Ready Icon" className="h-4 w-4" />
            <span className="pt-[2px] font-mono text-[14px] font-semibold text-lime-300">
              READY
            </span>
          </div>
        </button>
        <p className=" text-neutrals-400 mt-4 font-mono text-[24px] font-semibold leading-[32px] tracking-[-0.03em] md:text-[40px]">
          Comps Panel Design
        </p>
        <p className="mt-4 font-mono text-sm text-neutrals-300">
          This is how the interface should look like as default when page shows
          and/or when the Team Insights tab is actived.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse"></div>
      </div>
    </div>
  );
};

export default SectionLabel;
