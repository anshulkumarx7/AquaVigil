import React from "react";

const EmployeeList = () => {
  return (
    <div className="w-[79vw] h-[80.0vh] flex flex-col gap-2 justify-center bg-white rounded-lg">
      <div className="w-[76vw] h-[7vh] flex justify-evenly text-[#728ABF]">
        <p className="w-[10.17%] flex items-center justify-start">EMP ID</p>
        <p className="w-[10.17%] flex items-center justify-start">NAME</p>
        <p className="w-[20.35%] flex items-center justify-start">CATEGORY</p>
        <p className="w-[20.35%] flex items-center justify-start">
          ASSIGNED LOCATION
        </p>
        <p className="w-[10.17%] flex items-center justify-start">STATUS</p>
        <div className="w-[10.35%]"></div>

      </div>

      <div className=" h-[1px] w-[76vw] bg-[#728ABF] mx-auto mt-[-2px]"></div>

      <div className="w-[76vw] flex flex-col gap-[8px] h-[75vh] font-semibold overflow-y-scroll overflow-x-hidden">
        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#05CD99]"></div>
            Assigned
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>
        </div>

        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#234DF0]"></div>
            Available
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>
        </div>

        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#05CD99]"></div>
            Assigned
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>
        </div>

        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#234DF0]"></div>
            Available
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>
        </div>

        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#05CD99]"></div>
            Pending
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>

        </div>

        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#FFCE20]"></div>
            On Leave
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>

        </div>

        <div className="flex h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
          <p className="w-[10.17%] flex items-center justify-start">E101</p>
          <p className="w-[10.17%] flex items-center justify-start">JOHN</p>
          <p className="w-[20.35%] flex items-center justify-start">
            Water Blockage
          </p>
          <p className="w-[20.35%] flex items-center justify-start">BBSR....</p>
          <p className="w-[10.17%] flex items-center justify-start gap-2">
            <div className="h-[24px] w-[24px] rounded-full bg-[#234DF0]"></div>
            Available
          </p>
          <div className="w-[10.35%] flex items-center justify-center border-[1px] text-[#234DF0] rounded-md border-[#234DF0]">Assign</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
