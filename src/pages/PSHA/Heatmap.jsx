import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";
import { Typography } from "@mui/material";
import jsonData from "../../data.json";
import person from "../../Icons/person-svgrepo-com.svg";
import profileCicle from "../../Icons/profile-circle-svgrepo-com (2).svg";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const HeatmapComponent = () => {
  // const xLabels = ["D1Q1", "D1Q2", "D2Q1", "D2Q2"];
  const d1q1 = jsonData["PSHA"]["D1Q1"].manned;
  const d1q2 = jsonData["PSHA"]["D1Q2"].manned;
  const d2q1 = jsonData["PSHA"]["D2Q1"].manned;
  const d2q2 = jsonData["PSHA"]["D2Q2"].manned;

  const xLabels = [
    {
      label: "D1Q1",
      icon: (
        <AccessibilityIcon
          style={{
            height: "21px",
            width: "25px",
            color: d1q1 === true ? "green" : "red",
          }}
        />
      ),
    },
    {
      label: "D1Q2",
      icon: (
        <AccessibilityIcon
          style={{
            height: "21px",
            width: "25px",
            color: d1q2 === true ? "green" : "red",
          }}
        />
      ),
    },
    {
      label: "D2Q1",
      icon: (
        <AccessibilityIcon
          style={{
            height: "21px",
            width: "25px",
            color: d2q1 === true ? "green" : "red",
          }}
        />
      ),
    },
    {
      label: "D2Q2",
      icon: (
        <AccessibilityIcon
          style={{
            height: "21px",
            width: "25px",
            color: d2q2 === true ? "green" : "red",
          }}
        />
      ),
    },
  ];

  // const yLabels = [
  //   "0 am",
  //   "1 am",
  //   "2 am",
  //   "3 am",
  //   "4 am",
  //   "5 am",
  //   "6 am",
  //   "7 am",
  //   "8 am",
  //   "9 am",
  //   "10 am",
  //   "11 am",
  //   "12 pm",
  //   "13 pm",
  //   "14 pm",
  //   "15 pm",
  //   "16 pm",
  //   "17 pm",
  //   "18 pm",
  //   "19 pm",
  //   "20 pm",
  //   "21 pm",
  //   "22 pm",
  //   "23 pm",
  // ];

  // const data = yLabels.map((yLabel, yIndex) =>
  //   xLabels.map(
  //     (xLabel, xIndex) =>
  //       jsonData["Entrance"][xLabel]["Heatmap"][yIndex.toString()]["Pax"]
  //   )
  // );

  // const data = yLabels.map((yLabel, yIndex) =>
  //   xLabels.map(
  //     (xLabel, xIndex) =>
  //       jsonData["PSHA"][xLabel.label]["Heatmap"][yIndex.toString()]["Pax"]
  //   )
  // );
  const currentHour = new Date().getHours();
  const yLabels = [];
  const data = [];

  for (let i = currentHour; i >= currentHour - 23; i--) {
    const hour = (24 + i) % 24;
    yLabels.push(`${hour}`);
    console.log(hour);
    const xData = xLabels.map((xLabel) => {
      const yIndex = (24 + i - currentHour + 23) % 24;

      return jsonData["PSHA"][xLabel.label]["Heatmap"][hour.toString()]["Pax"];
    });
    data.push(xData);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "17px",
        width: "100%",
        alignItems: "start",
        maxHeight: "250px",
        // marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "98%",
          flexDirection: "column",
          // marginLeft: "20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#153f7b",
            borderRadius: "10px",
            justifyContent: "start",
            marginLeft: "10px",
          }}
        >
          <Typography variant="h5" gutterBottom style={{ marginLeft: "10px" }}>
            <Typography
              variant="h6"
              style={{
                color: "white",
                fontFamily: "bold",
                marginTop: "3px",
                marginLeft: "10px",
              }}
            >
              Passenger Queue Heatmap
            </Typography>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "3px 0",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "120px",
            marginRight: "120px",
          }}
        >
          {xLabels.map((xLabel) => (
            <div
              key={xLabel.label}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "70px",
                padding: "5px 0",
              }}
            >
              {xLabel.icon}
              <Typography
                variant="caption"
                style={{ color: "#153f7b", textAlign: "center" }}
              >
                {xLabel.label}
              </Typography>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            height: "134px",
            fontFamily: "sans-serif",
            marginLeft: "10px",
            marginRight: "auto",
            marginTop: "14px",
            overflowY: "auto",
            marginBottom: "20px",
          }}
        >
          <HeatMapGrid
            data={data}
            // xLabels={xLabels.map((xLabel) => (
            //   <div key={xLabel.label}>
            //     {xLabel.icon}
            //     <Typography
            //       variant="caption"
            //       style={{ color: "#153f7b", textAlign: "center" }}
            //     >
            //       {xLabel.label}
            //     </Typography>
            //   </div>
            // ))}
            yLabels={yLabels}
            cellRender={(x, y, value) => (
              <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
            )}
            xLabelsStyle={(index) => ({
              color: "#153f7b",
              fontSize: ".80rem",
            })}
            yLabelsStyle={() => ({
              fontSize: ".90rem",
              textTransform: "uppercase",
              color: "#153f7b",
            })}
            cellStyle={(_x, _y, ratio) => {
              let backgroundColor = "";
              if (ratio >= 0 && ratio <= 0.25) {
                backgroundColor = "#dcebfe";
              } else if (ratio > 0.25 && ratio <= 0.5) {
                backgroundColor = "#9abcec";
              } else if (ratio > 0.5 && ratio <= 0.75) {
                backgroundColor = "#487ac1";
              } else {
                backgroundColor = "#153f7b";
              }

              return {
                background: backgroundColor,
                fontSize: ".7rem",
                color: `rgba(0, 0, 0, ${ratio / 2 + 0.7})`,
                border: "1px solid white",
                // margin: "1px",
              };
            }}
            cellHeight="2.5rem"
            xLabelsPos="top"
            //   onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeatmapComponent;
