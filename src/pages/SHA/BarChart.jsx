import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import dummyData from "../../data.json";
import { Typography } from "@mui/material";

const BarChart = ({ index }) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [0, 0, 0], // Initialize with zeros
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["<5mins", "<10mins", ">10mins"],
      },
      colors: ["#153f7b", "#153f7b", "#153f7b"],
    },
  });

  useEffect(() => {
    const updateChartData = () => {
      const selectedData =
        index === "D1Q1"
          ? dummyData.SHA.D1Q1
          : index === "D1Q2"
          ? dummyData.SHA.D1Q2
          : index === "D2Q1"
          ? dummyData.SHA.D2Q1
          : dummyData.SHA.D2Q2;
      const seriesData = [
        selectedData["<5mins"],
        selectedData["<10mins"],
        selectedData[">10mins"],
      ];
      setChartData((prevData) => ({
        ...prevData,
        series: [{ data: seriesData }],
      }));
    };

    updateChartData();
  }, [index]);

  return (
    <div id="chart" style={{ width: "35%", background: "white" }}>
      <Typography
        variant="h5"
        size="md"
        mb="4"
        mt="10"
        ml="17px"
        color={"#153f7b"}
      >
        Avg Waiting Time
      </Typography>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={225}
      />
    </div>
  );
};

export default BarChart;
