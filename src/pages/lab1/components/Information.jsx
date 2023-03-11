import React from "react";
import Main from "./Main";
const Information = (props) => {
  const { cases, deaths, recovered} = props;
  return (
    <div>
      <h1>Total cases: {cases}</h1>
      <h1>Total deaths: {deaths} </h1>
      <h1>Total recovered: {recovered}</h1>
    </div>
  );
};

export default Information;
