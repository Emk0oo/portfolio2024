import React from "react";

const Timeline = () => {
  return (
    <>
      <h1 className="text-xl ">My timeline</h1>
      <div className="flex justify-center">
        <div id="timeline" className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-screen"></div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
