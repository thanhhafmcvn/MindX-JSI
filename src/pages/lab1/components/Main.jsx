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
  return (
    <div>
      <h1>{testAPI}</h1>
      <Information
        cases={toLocaleString(apiResponse.Global.TotalConfirmed)}
        deaths={toLocaleString(apiResponse.Global.TotalDeaths)}
        recovered={toLocaleString(apiResponse.Global.TotalRecovered)}
      />
    </div>
  );
};
export default Main;
