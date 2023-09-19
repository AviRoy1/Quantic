import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// import dummyData from "../../data.json";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import waiting from "../../Icons/WATINTG-01.svg";
import totalpax from "../../Icons/TOTAL TAX--01.svg";
const LineChartComp = ({ index, dummyData }) => {
  console.log("debug--  ", dummyData, index);
  let arr = [];
  let arr2 = [];
  // const data =
  let maxX = 0;
  if (index !== null) {
    const data = Object.values(dummyData.SHA[index].Heatmap).map(
      (item, index) => {
        arr.push(item.Pax);
        maxX = Math.max(item.Pax, maxX);
        arr2.push(index + "-" + (index + 1));
      }
    );
  }
  arr.pop();
  arr2.pop();
  const maxPeakIndex = arr.indexOf(Math.max(...arr));
  let maxY = maxX + 5 - ((maxX + 5) % 5);
  const series = [
    {
      name: "PAX (1x100)/hr",
      data: arr,
      markers: {
        size: 4,
        colors: "#e74c3c",
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 6,
        },
      },
    },
  ];

  const options = {
    tooltip: {
      enabled: true,
      shared: false,

      x: {
        show: true,

        formatter: function (value) {
          return "Time: " + value;
        },
      },
      y: {
        formatter: function (value) {
          return "PAX: " + value;
        },
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["#153f7b"],
      width: 2,
    },
    annotations: {
      points: [
        {
          x: arr2[maxPeakIndex],
          y: arr[maxPeakIndex],
          marker: {
            size: 6,
            fillColor: "#e74c3c",
            strokeColor: "#fff",
            strokeWidth: 2,
            shape: "circle",
          },
          label: {
            borderColor: "#e74c3c",
            style: {
              fontSize: "12px",
              color: "#fff",
              background: "#e74c3c",
            },
            text: "Peak Hr",
          },
        },
      ],
    },
    title: {
      text: "Hourly Passenger Entry",
      align: "left",
      style: {
        fontSize: "21px",
        color: "#153f7b",
        fontWeight: "bold",
      },
      offsetX: 18,
      offsetY: 5,
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: arr2,
      title: {
        text: "Time(Hour)",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
        offsetX: 0,
        offsetY: -16,
      },
      labels: {
        rotate: -45,
        rotateAlways: true,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: true,
        style: {
          fontSize: "12px",
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      title: {
        text: "PAX (1x100)/hr",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      min: 0,
      max: maxY,
      tickAmount: 6,
      labels: {
        // formatter: (value) => {
        //   return (value * 25).toFixed(0); // Calculate the tick label based on interval of 25
        // },
        style: {
          fontSize: "12px",
          fontWeight: "bold",
        },
      },
    },

    fill: {
      colors: ["white"],
    },
  };

  const chartHeight = 250;
  const boxHeight = 60;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            id="chart"
            style={{
              background: "white",
              margin: "10px",
              marginRight: "5px",
            }}
          >
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={chartHeight}
              width={"98%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LineChartComp;
