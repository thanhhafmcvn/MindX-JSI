import axios from "axios";
import React, { useState, useEffect } from "react";
import Information from "./Information";
const APIEndpoint = "https://api.covid19api.com/summary";

const getData = async () => {
  const response = await axios.get(APIEndpoint);
  const data = response.data;
  return data;
};

const Main = () => {
  const [apiResponse, setApiResponse] = useState("Loading");
  useEffect(() => {
    getData().then((data) => setApiResponse(data));
  }, []);
  const testAPI = console.log(apiResponse);
  const totalCases = apiResponse.Global.TotalConfirmed;
  const totalDeaths = apiResponse.Global.TotalDeaths;
  const totalRecovered = apiResponse.Global.TotalRecovered;
  return (
    <div>
      <h1>{testAPI}</h1>
      <Information
        cases={totalCases}
        deaths={totalDeaths}
        recovered={totalRecovered}
      />
    </div>
  );
};
export default Main;
