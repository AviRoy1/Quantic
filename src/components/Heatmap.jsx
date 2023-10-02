import React, { useEffect } from "react";
import { HeatMapGrid } from "react-grid-heatmap";
import { Box, Grid, Paper, Typography } from "@mui/material";
// import jsonData from "../data.json";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const HeatmapComponent = ({ jsonData }) => {
  const d1GateStatus =
    jsonData["Entrance"]["D1Q1"]["Total_awt"] +
    jsonData["Entrance"]["D1Q2"]["Total_awt"];
  const d2GateStatus =
    jsonData["Entrance"]["D2Q1"]["Total_awt"] +
    jsonData["Entrance"]["D2Q2"]["Total_awt"];
  const d3GateStatus =
    jsonData["Entrance"]["D3Q1"]["Total_awt"] +
    jsonData["Entrance"]["D3Q2"]["Total_awt"];
  let lowest;
  if (d1GateStatus < d2GateStatus && d1GateStatus < d3GateStatus) {
    let a1 = jsonData["Entrance"]["D1Q1"]["Total_awt"];
    let a2 = jsonData["Entrance"]["D1Q1"]["Total_awt"];
    if (a1 <= a2) {
      lowest = `(D1Q1)`;
    } else lowest = `(D1Q2 )`;
  } else if (d2GateStatus < d1GateStatus && d2GateStatus < d3GateStatus) {
    let a1 = jsonData["Entrance"]["D2Q1"]["Total_awt"];
    let a2 = jsonData["Entrance"]["D2Q1"]["Total_awt"];
    if (a1 <= a2) {
      lowest = `(D2Q1)`;
    } else lowest = `(D2Q2)`;
  } else {
    let a1 = jsonData["Entrance"]["D3Q1"]["Total_awt"];
    let a2 = jsonData["Entrance"]["D3Q1"]["Total_awt"];
    if (a1 <= a2) {
      lowest = `(D3Q1)`;
    } else lowest = `(D3Q2 - ${jsonData["Entrance"]["D3Q2"]["Total_awt"]})`;
  }
  const d1q1 =
    jsonData?.Entrance?.D1Q1 === null || jsonData?.Entrance?.D1Q1 === undefined
      ? false
      : jsonData["Entrance"]["D1Q1"].manned;
  const d1q2 =
    jsonData?.Entrance?.D1Q2 === null || jsonData?.Entrance?.D1Q2 === undefined
      ? false
      : jsonData["Entrance"]["D1Q2"].manned;
  const d2q1 =
    jsonData?.Entrance?.D2Q1 === null || jsonData?.Entrance?.D2Q1 === undefined
      ? false
      : jsonData["Entrance"]["D2Q1"].manned;
  const d2q2 =
    jsonData?.Entrance?.D2Q2 === null || jsonData?.Entrance?.D2Q2 === undefined
      ? false
      : jsonData["Entrance"]["D2Q2"].manned;
  const d3q1 =
    jsonData?.Entrance?.D3Q1 === null || jsonData?.Entrance?.D3Q1 === undefined
      ? false
      : jsonData["Entrance"]["D3Q1"].manned;
  const d3q2 =
    jsonData?.Entrance?.D3Q2 === null || jsonData?.Entrance?.D3Q2 === undefined
      ? false
      : jsonData["Entrance"]["D3Q2"].manned;
  useEffect(() => {
    const d1GateStatus =
      jsonData?.Entrance?.D1Q1 === null ||
      jsonData?.Entrance?.D1Q1 === undefined
        ? 0
        : jsonData["Entrance"]["D1Q1"]["Total_awt"] +
          jsonData["Entrance"]["D1Q2"]["Total_awt"];
    const d2GateStatus =
      jsonData?.Entrance?.D2Q1 === null ||
      jsonData?.Entrance?.D2Q1 === undefined
        ? 0
        : jsonData["Entrance"]["D2Q1"]["Total_awt"] +
          jsonData["Entrance"]["D2Q2"]["Total_awt"];
    const d3GateStatus =
      jsonData["Entrance"]["D3Q1"]["Total_awt"] +
      jsonData["Entrance"]["D3Q2"]["Total_awt"];
    if (d1GateStatus < d2GateStatus && d1GateStatus < d3GateStatus) {
      let a1 = jsonData["Entrance"]["D1Q1"]["Total_awt"];
      let a2 = jsonData["Entrance"]["D1Q1"]["Total_awt"];
      if (a1 <= a2) {
        lowest = `(D1Q1 - ${jsonData["Entrance"]["D1Q1"]["Total_awt"]})`;
      } else lowest = `(D1Q2 - ${jsonData["Entrance"]["D1Q2"]["Total_awt"]})`;
    } else if (d2GateStatus < d1GateStatus && d2GateStatus < d3GateStatus) {
      let a1 = jsonData["Entrance"]["D2Q1"]["Total_awt"];
      let a2 = jsonData["Entrance"]["D2Q1"]["Total_awt"];
      if (a1 <= a2) {
        lowest = `(D2Q1 - ${jsonData["Entrance"]["D2Q1"]["Total_awt"]})`;
      } else lowest = `(D2Q2 - ${jsonData["Entrance"]["D2Q2"]["Total_awt"]})`;
    } else {
      let a1 = jsonData["Entrance"]["D3Q1"]["Total_awt"];
      let a2 = jsonData["Entrance"]["D3Q1"]["Total_awt"];
      if (a1 <= a2) {
        lowest = `(D3Q1 - ${jsonData["Entrance"]["D3Q1"]["Total_awt"]})`;
      } else lowest = `(D3Q2 - ${jsonData["Entrance"]["D3Q2"]["Total_awt"]})`;
    }
    const d1q1 =
      jsonData?.Entrance?.D1Q1 === null ||
      jsonData?.Entrance?.D1Q1 === undefined
        ? false
        : jsonData["Entrance"]["D1Q1"].manned;
    const d1q2 =
      jsonData?.Entrance?.D1Q2 === null ||
      jsonData?.Entrance?.D1Q2 === undefined
        ? false
        : jsonData["Entrance"]["D1Q2"].manned;
    const d2q1 =
      jsonData?.Entrance?.D2Q1 === null ||
      jsonData?.Entrance?.D2Q1 === undefined
        ? false
        : jsonData["Entrance"]["D2Q1"].manned;
    const d2q2 =
      jsonData?.Entrance?.D2Q2 === null ||
      jsonData?.Entrance?.D2Q2 === undefined
        ? false
        : jsonData["Entrance"]["D2Q2"].manned;
  }, [jsonData]);

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
            width: "40px",
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
            width: "40px",
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
            width: "40px",
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
            width: "50px",
            color: d2q2 === true ? "green" : "red",
          }}
        />
      ),
    },
    {
      label: "D3Q1",
      icon: (
        <AccessibilityIcon
          style={{
            height: "21px",
            width: "50px",
            color: d2q2 === true ? "green" : "red",
          }}
        />
      ),
    },
    {
      label: "D3Q2",
      icon: (
        <AccessibilityIcon
          style={{
            height: "21px",
            width: "50px",
            color: d2q2 === true ? "green" : "red",
          }}
        />
      ),
    },
  ];

  for (let i = currentHour; i >= currentHour - 23; i--) {
    const hour = (24 + i) % 24;
    yLabels.push(`${hour}`);

    const xData = xLabels.map((xLabel) => {
      const yIndex = (24 + i - currentHour + 23) % 24;
      let cd = xLabel.label;
      // if (
      //   jsonData?.Entrance?.cd !== null &&
      //   jsonData?.Entrance?.cd !== undefined
      // )
      return jsonData["Entrance"][xLabel.label]["Heatmap"][hour.toString()][
        "Pax"
      ];
    });
    data.push(xData);
  }
  const newLabel = {
    label: "Hour",
  };

  xLabels.unshift(newLabel);

  // useEffect(() => {
  //   for (let i = currentHour; i >= currentHour - 23; i--) {
  //     const hour = (24 + i) % 24;
  //     yLabels.push(`${hour}`);

  //     const xData = xLabels.map((xLabel) => {
  //       const yIndex = (24 + i - currentHour + 23) % 24;

  //       return jsonData["Entrance"][xLabel.label]["Heatmap"][hour.toString()][
  //         "Pax"
  //       ];
  //     });
  //     data.push(xData);
  //   }
  //   const newLabel = {
  //     label: "Hour",
  //   };

  //   xLabels.unshift(newLabel);
  // }, [jsonData]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // marginLeft: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: "2 1 59%",
          minWidth: "59%",
          // marginLeft: "20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            // width: "100%",
            backgroundColor: "#153f7b",
            borderRadius: "10px",
            justifyContent: "start",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
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
                alignItems: "center",
                textAlign: "left",
                verticalAlign: "middle",
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
            alignContent: "center",
            alignItems: "center",
            marginLeft: "10px",
            width: "100%",
          }}
        >
          {xLabels.map((xLabel, index) =>
            xLabel.label === "Hour" ? (
              <div
                key={xLabel.label}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "70px",
                  padding: "5px 0",
                  marginLeft: "16px",
                  // flexGrow: 1,
                  flexGrow: 1,
                  marginRight: "-90px",
                }}
              >
                <Typography
                  variant="caption"
                  style={{
                    color: "#153f7b",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  {xLabel.label}
                </Typography>
              </div>
            ) : (
              <div
                key={xLabel.label}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "70px",
                  padding: "5px 0",
                  flexGrow: 1,
                  marginLeft:
                    xLabel.label === "D2Q2" ||
                    xLabel.label === "D2Q2" ||
                    xLabel.label === "D2Q1"
                      ? "35px"
                      : 0,
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
            )
          )}
        </div>
        <div
          style={{
            width: "96%",
            height: "164px",
            fontFamily: "sans-serif",
            marginLeft: "25px",
            marginRight: "auto",
            marginTop: "14px",
            overflowY: "auto",
            marginBottom: "20px",
          }}
        >
          <HeatMapGrid
            data={data}
            yLabels={yLabels}
            cellRender={(x, y, value) => (
              <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
            )}
            xLabelsStyle={(index) => ({
              color: "#153f7b",
              fontSize: ".80rem",
            })}
            yLabelsStyle={() => ({
              marginTop: "5px",
              fontSize: ".90rem",
              textTransform: "uppercase",
              // fontWeight: "bold",
              color: "#153f7b",
            })}
            cellStyle={(_x, _y, ratio) => {
              let backgroundColor = "";
              let color = "";

              if (ratio >= 0 && ratio <= 0.25) {
                backgroundColor = "#dcebfe";
                color = "black";
              } else if (ratio > 0.25 && ratio <= 0.5) {
                backgroundColor = "#9abcec";
                color = "black";
              } else if (ratio > 0.5 && ratio <= 0.75) {
                backgroundColor = "#487ac1";
                color = "white";
              } else {
                backgroundColor = "#153f7b";
                color = "white";
              }

              return {
                background: backgroundColor,
                fontSize: ".7rem",
                color: color,
                border: "1px solid white",
                marginLeft: "10px",
                marginTop: "5px",
                // You can adjust margin, padding, etc. here
              };
            }}
            cellHeight="2.5rem"
            xLabelsPos="top"
            // onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
          />
        </div>
      </div>

      <div
        style={{
          flex: "1 1 17%",
          marginLeft: "24px",
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-end",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          component={Paper}
          p={4}
          borderRadius="md"
          style={{
            height: "100%",
            display: "flex",
            // width:"100%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",

              backgroundColor: "#153f7b",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              color="primary"
              mt={-3}
              style={{
                color: "white",
                backgroundColor: "#153f7b",
                // borderRadius: "10px",
              }}
            >
              Gate Status
            </Typography>
          </div>
          <Grid
            container
            alignItems="center"
            marginTop={"10px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              style={{
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{ marginLeft: "10px" }}
              >
                <Typography
                  variant="h5"
                  style={{
                    width: "95%",
                    backgroundColor: "#58C55F",

                    marginLeft: "5px",
                    justifyContent: "center",
                    marginTop: "10px",
                    height: "50px",
                    alignItems: "center",
                    display: "flex",
                    color: "white",
                  }}
                >
                  {d1GateStatus < d2GateStatus && d1GateStatus < d3GateStatus
                    ? `D1`
                    : d2GateStatus < d1GateStatus && d2GateStatus < d3GateStatus
                    ? `D2`
                    : `D3 `}
                </Typography>
              </Typography>
            </Box>

            <Box
              style={{
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{ marginLeft: "10px" }}
              >
                <Typography
                  variant="h5"
                  style={{
                    width: "95%",
                    backgroundColor: "#F9A81B",
                    marginLeft: "5px",
                    justifyContent: "center",
                    marginTop: "10px",
                    height: "50px",
                    alignItems: "center",
                    display: "flex",
                    color: "white",
                  }}
                >
                  {!(
                    d1GateStatus < d2GateStatus && d1GateStatus < d3GateStatus
                  ) &&
                  !(d1GateStatus > d2GateStatus && d1GateStatus > d3GateStatus)
                    ? `D1`
                    : !(
                        d2GateStatus < d1GateStatus &&
                        d2GateStatus < d3GateStatus
                      ) &&
                      !(
                        d2GateStatus > d1GateStatus &&
                        d2GateStatus > d3GateStatus
                      )
                    ? `D2`
                    : `D3 `}
                </Typography>
              </Typography>
            </Box>

            <Box
              style={{
                width: "100%",
                // marginLeft: "30px",
                // marginRight: "30px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                style={{ marginLeft: "10px" }}
              >
                <Typography
                  variant="h5"
                  style={{
                    width: "95%",
                    backgroundColor: "#FF7943",
                    marginLeft: "5px",
                    justifyContent: "center",
                    marginTop: "10px",
                    height: "50px",
                    alignItems: "center",
                    display: "flex",
                    color: "white",
                  }}
                >
                  {d1GateStatus >= d2GateStatus && d1GateStatus >= d3GateStatus
                    ? `D1  `
                    : d2GateStatus >= d1GateStatus &&
                      d2GateStatus >= d3GateStatus
                    ? `D2 `
                    : `D3 `}
                </Typography>
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
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
                    color: "#FF7943",
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
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default HeatmapComponent;
