import React, { useEffect, useState } from "react";

import ChartComponent from "@/components/Chart";
import Heading from "@/components/Heading";
import Tab from "@/components/Tab";

const AgeChart = () => {
  const labelsColors = [
    {
      label: "18-25 Years Old",
      color: "#36c5cc",
    },
    {
      label: "26-30 Years Old",
      color: "#5adde3",
    },
    {
      label: "31-35 Years Old",
      color: "#8af2f7",
    },
    {
      label: "36-40 Years Old",
      color: "#82e8ed",
    },
    {
      label: "41-45 Years Old",
      color: "#9ef1f5",
    },
    {
      label: "46-50 Years Old",
      color: "#e6feff",
    },
  ];
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: labelsColors.map((item) => item.label), // x-axis
      datasets: [
        {
          data: [23, 18, 9, 15, 5, 30],
          backgroundColor: labelsColors.map((item) => item.color),
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
          padding: 10,
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
      <ChartComponent
        chartData={chartData}
        type={"pie"}
        options={options}
        chartName={"Male Vs Female"}
      />
    </div>
  );
};

export default AgeChart;
