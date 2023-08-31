import React from "react";
import ReactApexChart from "react-apexcharts";
import dummyData from "../data.json";

const BarandLineChart = ({ index }) => {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  // console.log(dummyData.Entrance[index].Heatmap);
  const data = Object.values(dummyData.Entrance[index].Heatmap).map(
    (item, index) => {
      arr2.push(item.AWT);
      arr3.push(item.APT > 7 ? item.APT : 0);
      arr.push(index);
    }
  );

  const options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: "Average Waiting Time and Average Processing Time",
      align: "left",
      style: {
        fontSize: "22px",
        color: "#153f7b",
        fontWeight: "bold",
      },
      offsetX: 28,
      offsetY: 5,
    },
    xaxis: {
      categories: arr,
      title: {
        text: "Time(Hour)",
        style: {
          color: "black",
        },
      },
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
        opposite: true,
        axisTicks: {
          show: false, // Hide the axis ticks
        },
        labels: {
          show: false, // Hide the axis labels
        },
        show: false,
      },
      {
        seriesName: "Average Waiting Time",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#707070",
        },
        labels: {
          style: {
            colors: "#707070",
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: false,
        position: "topLeft",
        offsetY: 30,
        offsetX: 60,
      },
    },
    colors: ["#153f7b", "#707070"],
  };

  const series = [
    {
      name: "Average Processing Time",
      type: "column",
      data: arr3,
    },
    {
      name: "Average Waiting Time",
      type: "line",
      data: arr2,
    },
  ];

  return (
    <div
      id="chart"
      style={{ width: "65%", background: "white", marginLeft: "24px" }}
    >
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
