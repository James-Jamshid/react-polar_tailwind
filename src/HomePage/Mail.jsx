import React from "react";

const Mail = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[545px] gap-y-10">
      <div className="flex">
        <h1>
          Have Question in Mind? <br /> Let us help you
        </h1>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter you question"
          className="flex w-[637px] h-[74px] pl-4 bg-[#FAFAFA] rounded-l-lg"
        />
        <button className="flex w-[134px] h-[74px]  bg-[#D23166] rounded-r-lg text-[white] hover:bg-[red] cursor-pointer items-center justify-center">
          Send
        </button>
      </div>
    </div>
  );
};

export default Mail;
