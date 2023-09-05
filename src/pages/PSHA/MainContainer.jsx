import React, { useState } from "react";
import Heatmap from "./Heatmap";
import LineChartComp from "./LineChartComp";
import BarChart from "./BarChart";
import BarandLineChart from "./BarandLineChart";
import { DatePicker } from "@mui/lab";
import { TextField, Tabs, Tab, Box } from "@mui/material";
import Navbar from "../../components/NavBar";

const Psha = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const [data, setData] = useState(
    // require(`../../${selectedDate}.json`) === null
    //   ?
    null
    // : require(`../../${selectedDate}.json`)
  );

  const handleDateChange = (event) => {
    try {
      setData(require(`../../${event.target.value}.json`));
      // console.log("data-  ",data);
    } catch (error) {
      // console.log(error);
    }
    console.log("date --  ", data);
    setSelectedDate(event.target.value);
  };

  const [index, setIndex] = useState("D1Q2");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === 0) setIndex("D1Q1");
    if (newValue === 1) setIndex("D1Q2");
    if (newValue === 2) setIndex("D2Q1");
    if (newValue === 3) setIndex("D2Q2");
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
                <Tab label="D1Q1" />
                <Tab label="D1Q2" />
                <Tab label="D2Q1" />
                <Tab label="D2Q2" />
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
              <div style={{ height: "60vh" }}></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Psha;
