import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";
import { Box, Typography } from "@mui/material";
import jsonData from "../data.json";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const HeatmapComponent = () => {
  const d1GateStatus =
    jsonData["Entrance"]["D1Q1"]["Total_awt"] +
    jsonData["Entrance"]["D1Q2"]["Total_awt"];
  const d2GateStatus =
    jsonData["Entrance"]["D2Q1"]["Total_awt"] +
    jsonData["Entrance"]["D2Q2"]["Total_awt"];
  const d1q1 = jsonData["Entrance"]["D1Q1"].manned;
  const d1q2 = jsonData["Entrance"]["D1Q2"].manned;
  const d2q1 = jsonData["Entrance"]["D2Q1"].manned;
  const d2q2 = jsonData["Entrance"]["D2Q2"].manned;

  const currentHour = new Date().getHours();
  const yLabels = [];
  const data = [];

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
  //       jsonData["Entrance"][xLabel.label]["Heatmap"][yIndex.toString()]["Pax"]
  //   )
  // );

  for (let i = currentHour; i >= currentHour - 23; i--) {
    const hour = (24 + i) % 24;
    yLabels.push(`${hour}`);

    const xData = xLabels.map((xLabel) => {
      const yIndex = (24 + i - currentHour + 23) % 24;

      return jsonData["Entrance"][xLabel.label]["Heatmap"][hour.toString()][
        "Pax"
      ];
    });
    data.push(xData);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "17px",
        width: "100%",
        alignItems: "start",
        maxHeight: "290px",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
          marginLeft: "20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "98%",
            backgroundColor: "#153f7b",
            borderRadius: "10px",
            justifyContent: "start",
            marginLeft: "10px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginLeft: "10px",
              color: "white",
              fontFamily: "bold",
              marginTop: "3px",
              fontSize: "22px",
            }}
          >
            Passenger Queue Heatmap
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
            width: "98%",
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
      <div
        style={{
          width: "25%",
          height: "250px",
          fontFamily: "sans-serif",
          marginLeft: "30px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "95%",
            backgroundColor: "#153f7b",
            marginLeft: "5px",
            borderRadius: "10px",
            justifyContent: "start",
            marginTop: "7px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom style={{ marginLeft: "10px" }}>
            <Typography
              // variant="h6"
              style={{
                color: "white",
                fontFamily: "bold",
                marginTop: "3px",
                marginLeft: "20px",
                fontSize: "22px",
              }}
            >
              Gate Status
            </Typography>
          </Typography>
        </div>
        <Box
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <Typography variant="h5" gutterBottom style={{ marginLeft: "10px" }}>
            <Typography
              variant="h5"
              style={{
                width: "95%",
                backgroundColor: "#58C55F",
                marginLeft: "5px",
                justifyContent: "center",
                marginTop: "18px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                color: "white",
              }}
            >
              {d1GateStatus >= d2GateStatus ? "D1" : "D2"}
            </Typography>
          </Typography>
        </Box>
        <Box
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <Typography variant="h5" gutterBottom style={{ marginLeft: "10px" }}>
            <Typography
              variant="h5"
              style={{
                width: "95%",
                backgroundColor: "#F9A81B",
                marginLeft: "5px",
                justifyContent: "center",
                marginTop: "18px",
                height: "50px",
                alignItems: "center",
                display: "flex",
                color: "white",
              }}
            >
              {d1GateStatus < d2GateStatus ? "D1" : "D2"}
            </Typography>
          </Typography>
        </Box>

        <Box
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography
            gutterBottom
            variant="h8"
            style={{ display: "flex", alignItems: "center" }}
          >
            <MdOutlineRadioButtonChecked
              style={{ height: "20px", width: "20px", color: "#58C55F" }}
            />
            <Typography
              variant="h8"
              style={{ fontWeight: "bold", marginLeft: "5px" }}
            >
              Low Traffic
            </Typography>
            <MdOutlineRadioButtonChecked
              style={{
                height: "20px",
                width: "20px",
                color: "#F9A81B",
                marginLeft: "10px",
              }}
            />
            <Typography
              variant="h8"
              style={{ fontWeight: "bold", marginLeft: "5px" }}
            >
              High Traffic
            </Typography>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default HeatmapComponent;
