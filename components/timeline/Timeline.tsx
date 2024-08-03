import React from "react";

const Timeline = () => {
  return (
    <>
      <hr className="border-gray-800 my-8 md:mx-[33.9%]" />

      <div id="timeline" className="w-full h-full flex flex-col md:mx-[33.9%]">
        <h1 className="text-xl mb-8">My timeline</h1>
        <div className="relative w-full h-full flex flex-col items-center">
          <div id="graph-timeline" className="relative w-full h-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-screen"></div>
            <div
              id="red-dot"
              style={{
                top: "0%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                width: "13px",
                height: "13px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
            <div id="content-graph" className="flex w-full ">
              <div id="content-graph-logo" className="w-1/2 flex justify-end items-center pr-4">
                O
              </div>
              <div id="content-graph-text" className="w-1/2 h-full">
                <p className="font-bold">2024.09.01</p>
                <p>Start of master degree - FullStack developer & web management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
