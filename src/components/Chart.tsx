import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie } from "react-chartjs-2";

import { IoIosMenu } from "react-icons/io";

import Heading from "./Heading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type PropsType = {
  chartData: {
    labels: string[];
    datasets: {
      id: number[];
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
  type: "bar" | "pie";
  options: any;
  chartName: string;
};

const ChartComponent = ({ chartData, type, options, chartName }: PropsType) => {
  const [data, setData] = useState<any>({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    setData(chartData);
  }, [chartData]);

  const chartRef: any = useRef(null);
  const plugins: any = [ChartDataLabels];

  return (
    <div className=" flex-1 h-full w-full " id={chartName}>
      {type === "bar" && (
        <div className=" w-full print:w-11/12">
          <Bar ref={chartRef} data={data} options={options} plugins={plugins} />
        </div>
      )}
      {type === "pie" && (
        <div className=" flex w-full items-center justify-center">
          <div className=" w-11/12 max-w-[20rem]">
            <Pie
              ref={chartRef}
              data={data}
              options={options}
              plugins={plugins}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
