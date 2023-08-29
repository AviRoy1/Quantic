import React from "react";
import ReactApexChart from "react-apexcharts";
import dummyData from "../../data.json";

const BarandLineChart = () => {
  let arr = [];
  let arr2 = [];
  let arr3 = [];

  const data = Object.values(dummyData.Entrance.Heatmap).map((item, index) => {
    arr2.push(item.AWT);
    arr3.push(item.APT);
    arr.push(index);
  });

  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: "Average Processing Time",
      align: "left",
      offsetX: 10,
      style: {
        fontSize: "22px",
        color: "#153f7b",
        fontWeight: "bold",
      },
    },
    xaxis: {
      categories: arr,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#153f7b",
        },
        labels: {
          style: {
            colors: "#153f7b",
          },
        },
        title: {
          text: "minutes",
          style: {
            color: "black",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Average Processing Time",
        align: "left",
        offsetX: 2,
        style: {
          fontSize: "22px",
          color: "#153f7b",
          fontWeight: "bold",
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft",
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
    colors: ["#153f7b", "#707070"],
  };

  const series = [
    {
      name: "Average Processing Time",
      type: "column",
      data: arr3,
    },
  ];

  return (
    <div id="chart" style={{ width: "100%", background: "white" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={250}
      />
    </div>
  );
};

export default BarandLineChart;
