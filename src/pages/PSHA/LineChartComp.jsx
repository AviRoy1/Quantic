import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// import dummyData from "../../data.json";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import waiting from "../../Icons/WATINTG-01.svg";
import totalpax from "../../Icons/TOTAL TAX--01.svg";
const LineChartComp = ({ index, dummyData }) => {
  console.log("data- ", dummyData);
  let arr = [];
  let arr2 = [];

  const [prv, setPrv] = useState(
    index === "D1Q1"
      ? dummyData.PSHA.D1Q1.pax_prev
      : index === "D1Q2"
      ? dummyData.PSHA.D1Q2.pax_prev
      : index === "D2Q2"
      ? dummyData.PSHA.D2Q1.pax_prev
      : dummyData.PSHA.D2Q2.pax_prev
  );
  const [maxpax, setMaxpax] = useState(
    index === "D1Q1"
      ? dummyData.PSHA.D1Q1.Total_pax
      : index === "D1Q2"
      ? dummyData.PSHA.D1Q2.Total_pax
      : index === "D2Q2"
      ? dummyData.PSHA.D2Q1.Total_pax
      : dummyData.PSHA.D2Q2.Total_pax
  );
  const [curAWT, setcurAWT] = useState(
    index === "D1Q1"
      ? dummyData.PSHA.D1Q1.Total_awt
      : index === "D1Q2"
      ? dummyData.PSHA.D1Q2.Total_awt
      : index === "D2Q2"
      ? dummyData.PSHA.D2Q1.Total_awt
      : dummyData.PSHA.D2Q2.Total_awt
  );
  const [prvAWT, setprvAWT] = useState(
    index === "D1Q1"
      ? dummyData.PSHA.D1Q1.awt_prev
      : index === "D1Q2"
      ? dummyData.PSHA.D1Q2.awt_prev
      : index === "D2Q2"
      ? dummyData.PSHA.D2Q1.awt_prev
      : dummyData.PSHA.D2Q2.awt_prev
  );

  useEffect(() => {
    setPrv(
      index === "D1Q1"
        ? dummyData.PSHA.D1Q1.pax_prev
        : index === "D1Q2"
        ? dummyData.PSHA.D1Q2.pax_prev
        : index === "D2Q2"
        ? dummyData.PSHA.D2Q1.pax_prev
        : dummyData.PSHA.D2Q2.pax_prev
    );
    setMaxpax(
      index === "D1Q1"
        ? dummyData.PSHA.D1Q1.Total_pax
        : index === "D1Q2"
        ? dummyData.PSHA.D1Q2.Total_pax
        : index === "D2Q2"
        ? dummyData.PSHA.D2Q1.Total_pax
        : dummyData.PSHA.D2Q2.Total_pax
    );
    setcurAWT(
      index === "D1Q1"
        ? dummyData.PSHA.D1Q1.Total_awt
        : index === "D1Q2"
        ? dummyData.PSHA.D1Q2.Total_awt
        : index === "D2Q2"
        ? dummyData.PSHA.D2Q1.Total_awt
        : dummyData.PSHA.D2Q2.Total_awt
    );
    setprvAWT(
      index === "D1Q1"
        ? dummyData.PSHA.D1Q1.awt_prev
        : index === "D12"
        ? dummyData.PSHA.D1Q2.awt_prev
        : index === "D2Q2"
        ? dummyData.PSHA.D2Q1.awt_prev
        : dummyData.PSHA.D2Q2.awt_prev
    );
  });

  let maxX = 0;
  let data;
  if (index === "D1Q1")
    data = Object.values(dummyData.PSHA.D1Q1.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  else if (index === "D1Q2")
    data = Object.values(dummyData.PSHA.D1Q2.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  else if (index === "D2Q1")
    data = Object.values(dummyData.PSHA.D2Q1.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  else {
    data = Object.values(dummyData.PSHA.D2Q2.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  }
  arr.pop();
  arr2.pop();
  const maxPeakIndex = arr.indexOf(Math.max(...arr));
  let maxY = maxX + 25 - ((maxX + 25) % 25);
  console.log(maxY);

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
      offsetX: 15,
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
        text: " Time(Hour)",
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
      tickAmount: maxY / 25,
      labels: {
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
        className="mainDivContainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "10px",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: "2 1 59%",
            minWidth: "59%",
            marginLeft: "-10px",
            // marginRight: "20px",
          }}
        >
          <div id="chart" style={{ background: "white", height: "100%" }}>
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={"100%"}
              width="100%"
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
              height: "50%",
              display: "flex",
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
                Total Pax
              </Typography>
            </div>
            <Grid container alignItems="center" marginTop={"10px"}>
              <Grid item xs={5}>
                {(((maxpax - prv) / maxpax) * 100).toFixed(2) > 0 ? (
                  <Typography ml={1} color="green">
                    <Typography variant="h5">{maxpax}</Typography>
                  </Typography>
                ) : (
                  <Typography ml={1} color="red">
                    <Typography variant="h5">{maxpax}</Typography>
                  </Typography>
                )}

                <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
                  vs prev = {prv}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Box display="flex" alignItems="center">
                  {(((maxpax - prv) / maxpax) * 100).toFixed(2) > 0 ? (
                    <ArrowUpward color="success" />
                  ) : (
                    <ArrowDownward color="error" />
                  )}

                  {(((maxpax - prv) / maxpax) * 100).toFixed(2) > 0 ? (
                    <Typography ml={1} color="green" variant="h7">
                      {(((maxpax - prv) / maxpax) * 100).toFixed(2)}%
                    </Typography>
                  ) : (
                    <Typography ml={1} variant="h7" color="red">
                      {(((maxpax - prv) / maxpax) * 100).toFixed(2)}%
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <Box display="flex" alignItems="flex-start" marginTop={"-5px"}>
                  <img
                    src={totalpax}
                    alt="Icon"
                    style={{
                      color: "blue",
                      width: "75px",
                      height: "75px",
                      marginTop: "-5px",
                      marginRight: "-25px",
                    }}
                  />
                  {/* <totalpax width={32} height={32} /> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            component={Paper}
            p={4}
            borderRadius="md"
            style={{
              // width: "95%",
              // maxWidth: "95%",
              marginTop: "10px",
              height: "50%",
              display: "flex",
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
                Avg Waiting Time
              </Typography>
            </div>
            <Grid container alignItems="center" marginTop={"10px"}>
              <Grid item xs={5}>
                {(((curAWT - prvAWT) / curAWT) * 100).toFixed(2) < 0 ? (
                  <Typography variant="h5" color="red">
                    {curAWT}mins
                  </Typography>
                ) : (
                  <Typography variant="h5" color="green">
                    {curAWT}mins
                  </Typography>
                )}

                <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
                  vs prev = {prvAWT}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Box display="flex" alignItems="center">
                  {(((curAWT - prvAWT) / curAWT) * 100).toFixed(2) > 0 ? (
                    <ArrowUpward color="success" />
                  ) : (
                    <ArrowDownward color="error" />
                  )}

                  {(((curAWT - prvAWT) / curAWT) * 100).toFixed(2) < 0 ? (
                    <Typography variant="h7" color="red">
                      {(((curAWT - prvAWT) / curAWT) * 100).toFixed(2)}
                    </Typography>
                  ) : (
                    <Typography variant="h7" color="green">
                      {(((curAWT - prvAWT) / curAWT) * 100).toFixed(2)}
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <Box display="flex" alignItems="flex-start" marginTop={"-5px"}>
                  <img
                    src={waiting}
                    alt="Icon"
                    style={{
                      color: "blue",
                      width: "75px",
                      height: "75px",
                      marginTop: "-5px",
                      marginRight: "-25px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};
export default LineChartComp;
