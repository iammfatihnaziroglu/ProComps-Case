import React from "react";

const Scaling: React.FC = () => {
  return (
    <div className="border-card_default-500 flex h-[336px] w-[104px] flex-col rounded-lg border">
      <div className="mt-5">
        <div className="ml-5 mt-5 flex h-10 w-16 flex-row gap-2">
          <div className="bg-scaling-green h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-red h-1 w-4 rounded-lg"></div>
        </div>
        <div className="ml-5 mt-5 flex h-10 w-16 flex-row gap-2">
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-green h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-red h-1 w-4 rounded-lg"></div>
        </div>
        <div className="ml-5 mt-5 flex h-10 w-16 flex-row gap-2">
          <div className="bg-scaling-red h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-green h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
        </div>
        <div className="ml-5 mt-5 flex h-10 w-16 flex-row gap-2">
          <div className="bg-scaling-red h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-green h-1 w-4 rounded-lg"></div>
        </div>
        <div className="ml-5 mt-5 flex h-10 w-16 flex-row gap-2">
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
          <div className="bg-scaling-orange h-1 w-4 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Scaling;
