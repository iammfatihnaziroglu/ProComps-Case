import React from "react";
import CompBuilder from "./modules/CompBuilder";

const CompsPage: React.FC = () => {
  return (
    <div>
      <CompBuilder />
    </div>
    // <div className="bg-card_default-500 max-w-screen left-5 top-5 flex h-[632px] max-h-screen w-[1056px]">
    //   <div></div>
    //   <div className="ml-8 mt-12 flex h-[552px] w-[1008px] items-center justify-center">
    //     <div className="relative h-full w-full overflow-hidden">
    //       <div className="absolute right-0 top-1 flex h-[250px] w-[4px] overflow-y-auto rounded-full bg-scroll"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CompsPage;
