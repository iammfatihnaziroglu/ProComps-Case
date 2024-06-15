import React from "react";
import ListComponent1 from "./base-components/ListComponent1";

const CompsPage: React.FC = () => {
  return (
    <div className="md:min-w-screen flex h-[670px] w-[1096px] items-center ">
      <div className="flex h-[632px] w-[1056px]">
        <div className="flex h-[632px] w-[1056px] rounded-[24px] bg-compName-gray">
          <div className="fixed ml-[72px] mt-4 h-4 w-[61px] transition duration-300 ease-in-out">
            <div className="h-4 w-[51px] gap-2">
              <p className="h-4 w-[33px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Name
              </p>
            </div>
          </div>
          <div className="fixed ml-[320px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Champions
              </p>
            </div>
          </div>
          <div className="fixed ml-[552px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Gamestyle
              </p>
            </div>
          </div>
          <div className="fixed ml-[672px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Scaling
              </p>
            </div>
          </div>
          <div className="fixed ml-[776px] mt-4 h-4 w-[61px]  transition duration-300 ease-in-out">
            <div className="h-4 w-[80px] gap-2">
              <p className="h-4 w-[62px] font-source-sans-pro text-[13px] font-normal leading-4 text-gray-400">
                Added
              </p>
            </div>
          </div>
          <div className="ml-8 mt-12 flex h-[552px] max-h-[552px] w-[1008px] flex-col items-start">
            <div className="flex h-[552px] w-[1008px] flex-col gap-8 overflow-hidden ">
              <div className="fixed ml-[1004px] mt-1 h-[250px] w-1 overflow-y-auto rounded-[200px] bg-delete-gray"></div>
              <div className="flex h-[944px] w-[976px] flex-col gap-4">
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
                <ListComponent1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompsPage;
