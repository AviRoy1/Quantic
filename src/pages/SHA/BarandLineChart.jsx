import React from "react";
import ReactApexChart from "react-apexcharts";
// import dummyData from "../../data.json";

const BarandLineChart = ({ index, dummyData }) => {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  console.log("jjj--  ", index, dummyData);
  const data = Object.values(dummyData?.SHA[index]?.Heatmap).map(
    (item, index) => {
      arr2.push(item.AWT);
      arr3.push(`${item.APT} sec`);
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 4],
    },
    title: {
      text: "Average Processing Time",
      align: "left",
      style: {
        fontSize: "22px",
        color: "#153f7b",
        fontWeight: "bold",
      },
      offsetX: 31,
      offsetY: 8,
    },
    xaxis: {
      categories: arr,
      title: {
        text: "Time(Hour)",
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: "14px",
          color: "#153f7b",
          fontWeight: "bold",
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
          text: "Seconds",
          style: {
            color: "black",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: "Average Processing Time in sec.",
        align: "left",
        offsetX: 2,
        axisTicks: {
          show: false, // Hide the axis ticks
        },
        labels: {
          show: false, // Hide the axis labels
        },
        show: false,
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
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        if (dataPointIndex !== undefined) {
          return `${series[seriesIndex][dataPointIndex]} second`;
        } else {
          // Default tooltip content when not hovering over a bar
          return "Default Tooltip";
        }
      },
      style: {
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff", // Text color
        background: "#333", // Background color
        padding: "10px", // Padding around the tooltip content
        borderRadius: "5px", // Border radius
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", // Box shadow
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
      labels: {
        colors: ["#153f7b", "#707070"], // Change legend item colors here
      },
      markers: {
        fillColors: ["#153f7b", "#707070"], // Change legend marker colors here
        radius: 12, // Adjust the marker radius as needed
        strokeWidth: 0, // Remove the marker stroke
      },
    },
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
