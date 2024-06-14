import React from "react";

function ListComponent1() {
  return (
    <div className="bg-compName-gray flex h-20 w-[976px] items-center rounded-[200px]">
      <div className=" flex h-20 w-[976px] items-center justify-center rounded-[200px] border border-delete-border">
        <div className="flex h-10 w-[896px] flex-row items-center justify-start">
          <div className="flex h-10 w-[816px] flex-row items-center justify-start gap-6">
            <p className="font-unbounded text-compName-white flex h-10 w-[200px] items-center text-[13px] font-normal leading-4">
              CompName Example Win
            </p>
            <div className="w-10 rotate-90 border border-delete-border"></div>
            <div className="flex h-10 w-[568px] flex-row gap-10 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListComponent1;
