import React, { useEffect, useState } from "react";

import ChartComponent from "@/components/Chart";
import Heading from "@/components/Heading";
import Tab from "@/components/Tab";

import StatusChart from "./Status";

const MaleFemaleChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: ["Male", "Female"], // x-axis
      datasets: [
        {
          id: 1,
          label: "Sample Label 1",
          data: [60, 50],
          backgroundColor: ["#1e67a5", "#2dc5cc"],
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        display: true,
        labels: {
          usePointStyle: true,
        },
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
        <Heading element="h2">Male vs Female</Heading>
      </div>
      <ul className=" grid grid-cols-2 gap-5">
        <li>
          <ChartComponent
            chartData={chartData}
            type={"doughnut"}
            options={options}
            chartName={"Male Vs Female"}
          />
        </li>
        <li>
          <StatusChart />
        </li>
      </ul>
    </div>
  );
};

export default MaleFemaleChart;
