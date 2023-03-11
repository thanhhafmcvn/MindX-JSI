import React from "react";
import TabBar from "./components/TabBar";
import Main from "./components/Main";

const Lesson1 = () => {
  const onPressHeaderName = () => {
    alert("mindX JSI course");
  };
  return (
    <div>
      <TabBar
        headerName={"LESSON 01 JSI COURSE"}
        onPressHeaderName={onPressHeaderName}
      />
      <div className="text-center my-20 text-black font-semibold text-[30px]">JSI React</div>
      <Main />
    </div>
  );
};

export default Lesson1;
