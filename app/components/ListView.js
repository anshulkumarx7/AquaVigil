import React from "react";

const ListView = ({complaintList}) => {
    return (
        <div className="w-[79vw] h-[80.0vh] flex flex-col gap-2 justify-center bg-white rounded-lg">
            <div className="w-[76vw] h-[7vh] flex justify-evenly text-[#728ABF]">
                <p className="w-[10.17%] flex items-center justify-start">NAME</p>
                <p className="w-[10.17%] flex items-center justify-start">DATE</p>
                <p className="w-[10.17%] flex items-center justify-start">CATEGORY</p>
                <p className="w-[10.17%] flex items-center justify-start">ADDRESS</p>
                <p className="w-[20.35%] flex items-center justify-start">DESCRIPTION</p>
                <p className="w-[10.17%] flex items-center justify-start">STATUS</p>
            </div>

            <div className=" h-[1px] w-[76vw] bg-[#728ABF] mx-auto mt-[-2px]"></div>

            <div className="w-[76vw] flex flex-col gap-[8px] h-[75vh] font-semibold overflow-y-scroll overflow-x-hidden">
                {complaintList?.length > 0 &&
                    complaintList.map((complaint, index) => (
                        <div key={index} className="flex h-[5vh] max-h-[5vh] text-[#3A4264] justify-evenly items-center w-[76vw]">
                            <p className="w-[10.17%] flex items-center justify-start">{complaint?.user?.name}</p>
                            <p className="w-[10.17%] flex items-center justify-start">{complaint?.date}</p>
                            <p className="w-[10.17%] flex items-center justify-start">{complaint?.category}</p>
                            <p className="w-[10.17%] flex items-center justify-start">{complaint?.address.slice(0, 15)}</p>
                            <p className="w-[20.35%] flex items-center justify-start">{complaint?.description.slice(0, 15)}...</p>
                            <div className="w-[10.17%] flex items-center justify-start gap-2">
                                <div
                                    className={`h-[24px] w-[24px] rounded-full ${
                                        complaint?.status === "assigned" ? "bg-[#D89314]" : complaint?.status === "not assigned" ? "bg-[#EE5D50]" : "bg-[#05CD99]"
                                    }`}></div>
                                {complaint?.status}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ListView;
