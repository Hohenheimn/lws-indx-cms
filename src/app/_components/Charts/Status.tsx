import React, { useEffect, useState } from "react";

import ChartComponent from "@/components/Chart";
import Heading from "@/components/Heading";

const StatusChart = () => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: ["Male", "Female"], // x-axis
      datasets: [
        {
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
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className=" flex justify-between items-center">
        <Heading element="h2">Status</Heading>
      </div>
      <ChartComponent
        chartData={chartData}
        type={"bar"}
        options={options}
        chartName={"Status"}
      />
    </>
  );
};

export default StatusChart;
