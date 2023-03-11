import React from "react";

const TabBar = ({ headerName, onPressHeaderName }) => {
  return (
    <div className="fixed top-0 right-0 left-0 h-[64px] w-screen bg-[#1C315E] z-50">
      <div className="flex flex-1 items-center justify-center">
        <h1
          className="text-white font-semibold text-[32px] hover:text-blue-400 "
          onClick={onPressHeaderName}
        >
          {headerName}
        </h1>
      </div>
    </div>
  );
};

export default TabBar;
