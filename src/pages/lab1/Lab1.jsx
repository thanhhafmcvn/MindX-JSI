import React, { useState, useEffect } from "react";
import Information from "./components/Information";
import axios from "axios";
const Lab1 = () => {
  const [apiResponse, setApiResponse] = useState({});
  const APIEndpoint = "https://api.covid19api.com/summary";
  const handleGetData = async () => {
    const response = await axios.get(APIEndpoint);
    const data = response.data;
    setApiResponse(data);
  };
  useEffect(() => {
    handleGetData();
  }, []);
  console.log(apiResponse)
  return (
    <div>
      <h1 className="text-center text-[64px] font-semibold">
        COVID19 WEBSITE USING REACTJS
      </h1>
      <Information
        cases={apiResponse?.Global?.TotalConfirmed}
        deaths={apiResponse?.Global?.TotalDeaths}
        recovered={apiResponse?.Global?.TotalRecovered}
      />
    </div>
  );
};

export default Lab1;
