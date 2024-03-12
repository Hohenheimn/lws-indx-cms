import React, { useEffect, useState } from "react";

import ChartComponent from "@/components/Chart";
import Heading from "@/components/Heading";
import Tab from "@/components/Tab";

const LocationChart = () => {
  const [tabActive, setTabActive] = useState("Country");

  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: [
        "ASIA",
        "AFRICA",
        "EUROPE",
        "SOUTH AMERICA",
        "NORTH AMERICA",
        "AUSTRALIA",
      ], // x-axis
      datasets: [
        {
          id: 1,
          label: "Sample Label 1",
          data: [1, 2, 3, 4, 5, 6],
          backgroundColor: "#2dc5cc",
        },
        {
          id: 2,
          label: "Sample Label 2",
          data: [6, 5, 4, 3, 2, 1],
          backgroundColor: "#1e67a5",
        },
      ],
    });
  }, []);

  const options = {
    onClick: (event: any, elements: any) => {
      // Handle click on the chart itself
      if (elements.length > 0) {
        // router.push("/employee-management/training-records");
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      datalabels: {
        color: "#fff",
        textShadowColor: "#000",
        textShadowBlur: 10,
        formatter: function (value: any, context: any) {
          const hrValue = value <= 0 ? "" : value;
          return hrValue;
        },
      },
    },
  };

  return (
    <div className=" space-y-5 p-10 bg-white rounded-lg shadow-md">
      <div className=" flex justify-between items-center">
        <Heading element="h2">Location</Heading>
        <Tab
          tabMenu={["Country", "City"]}
          active={tabActive}
          setActive={setTabActive}
        />
      </div>
      <ChartComponent
        chartData={chartData}
        type={"bar"}
        options={options}
        chartName={"Location"}
      />
    </div>
  );
};

export default LocationChart;
