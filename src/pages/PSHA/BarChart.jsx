import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// import dummyData from "../../data.json";
import { Typography } from "@mui/material";

const BarChart = ({ index, dummyData }) => {
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
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "Avg Waiting Time",
        align: "left",
        style: {
          fontSize: "22px",
          color: "#153f7b",
          fontWeight: "bold",
        },
        offsetX: 24,
        offsetY: 10,
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
        title: {
          text: "PAX",
        },
      },
      colors: ["#153f7b", "#153f7b", "#153f7b"],
    },
  });

  useEffect(() => {
    const updateChartData = () => {
      const selectedData =
        index === "D1Q1"
          ? dummyData.PSHA.D1Q1
          : index === "D1Q2"
          ? dummyData.PSHA.D1Q2
          : index === "D2Q1"
          ? dummyData.PSHA.D2Q1
          : dummyData.PSHA.D2Q2;
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
      {/* <Typography
        // variant="h5"
        fontSize={"22px"}
        // size="md"
        fontWeight={"bold"}
        mb="4"
        mt="10"
        ml="17px"
        color={"#153f7b"}
      >
        
      </Typography> */}
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
