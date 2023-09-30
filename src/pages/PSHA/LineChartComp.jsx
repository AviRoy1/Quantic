import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// import dummyData from "../../data.json";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import waiting from "../../Icons/WATINTG-01.svg";
import totalpax from "../../Icons/TOTAL TAX--01.svg";
const LineChartComp = ({ index, dummyData }) => {
  // console.log("data- ", dummyData);
  let arr = [];
  let arr2 = [];

  const [prv, setPrv] = useState(
    index === "LPSHA1"
      ? dummyData.PSHA.LPSHA1.pax_prev
      : index === "LPSHA2"
      ? dummyData.PSHA.LPSHA2.pax_prev
      : index === "RPSHA"
      ? dummyData.PSHA.RPSHA.pax_prev
      : null
  );
  const [maxpax, setMaxpax] = useState(
    index === "LPSHA1"
      ? dummyData.PSHA.LPSHA1.Total_pax
      : index === "LPSHA2"
      ? dummyData.PSHA.LPSHA2.Total_pax
      : index === "RPSHA"
      ? dummyData.PSHA.RPSHA.Total_pax
      : null
  );
  const [curAWT, setcurAWT] = useState(
    index === "LPSHA1"
      ? dummyData.PSHA.LPSHA1.Total_awt
      : index === "LPSHA2"
      ? dummyData.PSHA.LPSHA2.Total_awt
      : index === "RPSHA"
      ? dummyData.PSHA.RPSHA.Total_awt
      : null
  );
  const [prvAWT, setprvAWT] = useState(
    index === "LPSHA1"
      ? dummyData.PSHA.LPSHA1.awt_prev
      : index === "LPSHA2"
      ? dummyData.PSHA.LPSHA2.awt_prev
      : index === "RPSHA"
      ? dummyData.PSHA.RPSHA.awt_prev
      : null
  );

  useEffect(() => {
    setPrv(
      index === "LPSHA1"
        ? dummyData.PSHA.LPSHA1.pax_prev
        : index === "LPSHA2"
        ? dummyData.PSHA.LPSHA2.pax_prev
        : index === "RPSHA"
        ? dummyData.PSHA.RPSHA.pax_prev
        : null
    );
    setMaxpax(
      index === "LPSHA1"
        ? dummyData.PSHA.LPSHA1.Total_pax
        : index === "LPSHA2"
        ? dummyData.PSHA.LPSHA2.Total_pax
        : index === "RPSHA"
        ? dummyData.PSHA.RPSHA.Total_pax
        : null
    );
    setcurAWT(
      index === "LPSHA1"
        ? dummyData.PSHA.LPSHA1.Total_awt
        : index === "LPSHA2"
        ? dummyData.PSHA.LPSHA2.Total_awt
        : index === "RPSHA"
        ? dummyData.PSHA.RPSHA.Total_awt
        : null
    );
    setprvAWT(
      index === "LPSHA1"
        ? dummyData.PSHA.LPSHA1.awt_prev
        : index === "LPSHA2"
        ? dummyData.PSHA.LPSHA2.awt_prev
        : index === "RPSHA"
        ? dummyData.PSHA.RPSHA.awt_prev
        : null
    );
  });

  let maxX = 0;
  let data;
  if (index === "LPSHA1")
    data = Object.values(dummyData.PSHA.LPSHA1.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  else if (index === "LPSHA2")
    data = Object.values(dummyData.PSHA.LPSHA2.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  else if (index === "RPSHA")
    data = Object.values(dummyData.PSHA.RPSHA.Heatmap).map((item, index) => {
      arr.push(item.Pax);
      maxX = Math.max(item.Pax, maxX);
      arr2.push(index + "-" + (index + 1));
    });
  // else {
  //   data = Object.values(dummyData.PSHA.D2Q2.Heatmap).map((item, index) => {
  //     arr.push(item.Pax);
  //     maxX = Math.max(item.Pax, maxX);
  //     arr2.push(index + "-" + (index + 1));
  //   });
  // }
  arr.pop();
  arr2.pop();
  const maxPeakIndex = arr.indexOf(Math.max(...arr));
  let maxY = maxX + 5 - ((maxX + 5) % 5);
  // console.log(maxY);

  const series = [
    {
      name: "PAX/hr",
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
        text: "PAX/hr",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      min: 0,
      max: maxY,
      tickAmount: 6,
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
                {(maxpax - prv).toFixed(2) > 0 ? (
                  <Typography ml={1} color="green">
                    <Typography variant="h5">{maxpax}</Typography>
                  </Typography>
                ) : (
                  <Typography ml={1} color="red">
                    <Typography variant="h5">{maxpax}</Typography>
                  </Typography>
                )}
              </Grid>
              <Grid item xs={5}>
                <Box display="flex" alignItems="center">
                  {(maxpax - prv).toFixed(2) > 0 ? (
                    <ArrowUpward color="success" />
                  ) : (
                    <ArrowDownward color="error" />
                  )}

                  {(maxpax - prv).toFixed(2) > 0 ? (
                    <Typography ml={1} color="green" variant="h7">
                      {(maxpax - prv).toFixed(2)}%
                    </Typography>
                  ) : (
                    <Typography ml={1} variant="h7" color="red">
                      {(maxpax - prv).toFixed(2)}%
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
                {(curAWT - prvAWT).toFixed(2) < 0 ? (
                  <Typography variant="h5" color="red">
                    {curAWT}mins
                  </Typography>
                ) : (
                  <Typography variant="h5" color="green">
                    {curAWT}mins
                  </Typography>
                )}

                {/* <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
                  vs prev = {prvAWT}
                </Typography> */}
              </Grid>
              <Grid item xs={5}>
                <Box display="flex" alignItems="center">
                  {(curAWT - prvAWT).toFixed(2) > 0 ? (
                    <ArrowUpward color="success" />
                  ) : (
                    <ArrowDownward color="error" />
                  )}

                  {(curAWT - prvAWT).toFixed(2) < 0 ? (
                    <Typography variant="h7" color="red">
                      {(curAWT - prvAWT).toFixed(2)}
                    </Typography>
                  ) : (
                    <Typography variant="h7" color="green">
                      {(curAWT - prvAWT).toFixed(2)}
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
