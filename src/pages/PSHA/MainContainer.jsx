import React, { useEffect, useState } from "react";
import Heatmap from "./Heatmap";
import LineChartComp from "./LineChartComp";
import BarChart from "./BarChart";
import BarandLineChart from "./BarandLineChart";
import { DatePicker } from "@mui/lab";
import { TextField, Tabs, Tab, Box, Typography } from "@mui/material";
import Navbar from "../../components/NavBar";

const Psha = ({ temp }) => {
  console.log("main-- ", temp);
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  // let data = null;
  const [data, setData] = useState(
    // require(`../${selectedDate}.json`) === null
    //   ?
    temp
    // : require(`../${selectedDate}.json`)
  );

  const fetchData = async () => {
    try {
      const response = require(`../../${selectedDate}.json`);
      // const jsonData = await response.json();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(null);
    // setData(null);
    try {
      // const response = require(`../../${selectedDate}.json`);
      setData(require(`../../${event.target.value}.json`));
    } catch (error) {
      // console.log(error);
    }
    setSelectedDate(event.target.value);
  };

  const [index, setIndex] = useState("LPSHA1");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === 0) setIndex("LPSHA1");
    if (newValue === 1) setIndex("LPSHA2");
    if (newValue === 2) setIndex("RPSHA");
    // if (newValue === 3) setIndex("D2Q2");
    setActiveTab(newValue);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            flex: 1,
            border: "1px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            margin: "8px",
          }}
        >
          {selectedDate !== null && data !== null ? (
            <Heatmap jsonData={data} />
          ) : (
            <></>
          )}
        </div>

        <div
          style={{
            borderColor: "#153f7b",
            border: "2px solid",
            margin: "5px",
            marginTop: "19px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "stretch",
              backgroundColor: "#e4ebf3",
              // border: "1px solid #ccc",
              marginLeft: "10px",
              marginRight: "10px",
              // height: "120px",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
              width="100%"
              // padding="16px"
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="LPSHA1" />
                <Tab label="LPSHA2" />
                <Tab label="RPSHA" />
                {/* <Tab label="D2Q2" /> */}
              </Tabs>
              <style>
                {`
          /* Change the background color of the active tab */
          .MuiTabs-flexContainer button.Mui-selected {
            background-color: #153f7b;
            color: white; /* Set text color to make it readable */
          }
        `}
              </style>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              justifyContent="center"
              width="50%"
              // marginRight={"30px"}
              marginBottom={"15px"}
              backgroundColor="#e4ebf3"
            >
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                max={new Date().toISOString().split("T")[0]}
                style={{
                  backgroundColor: "#153f7b",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  height: "40px",
                  width: "30%",
                  color: "#e4ebf3",
                  padding: "6px",
                  fontSize: "16px",
                }}
              />
              <style>
                {`
      /* Change the color of the calendar icon and adjust its size */
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1); /* This inverts the color of the icon */
        width: 25px; /* Adjust the width */
        height: 25px; /* Adjust the height */
        margin-left: 6px; /* Add margin for spacing */
      }
    `}
              </style>
            </Box>
          </div>

          {selectedDate !== null && data !== null ? (
            <>
              <div
                style={{
                  border: "1px solid rgb(204, 204, 204)",
                  backgroundColor: "rgb(228, 235, 243)",
                  margin: "8px",
                  flex: "1 1 0%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LineChartComp index={index} dummyData={data} />
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#e4ebf3",
                  margin: "8px",
                  marginTop: "22px",
                }}
              >
                <BarChart index={index} dummyData={data} />
                <BarandLineChart index={index} dummyData={data} />
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  height: "60vh",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Typography variant="h4">
                  {`No data is present for ${selectedDate}`}{" "}
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Psha;
