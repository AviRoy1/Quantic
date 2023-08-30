import React, { useState } from "react";
import Heatmap from "./Heatmap";
import LineChartComp from "./LineChartComp";
import BarChart from "./BarChart";
import BarandLineChart from "./BarandLineChart";
import { DatePicker } from "@mui/lab";
import { TextField, Tabs, Tab, Box } from "@mui/material";
import Navbar from "../../components/NavBar";
import data from "../../data.json";

const Sha = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const obj = data["SHA"];
  let arr = [];
  const [objData, setObjData] = React.useState(data["SHA"]);
  Object.keys(obj).map((item) => {
    if (obj[item].active === true) {
      arr.push(item);
    }
  });
  const [index, setIndex] = useState(arr.length > 0 ? arr[0] : null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setIndex(arr[newValue]);
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
          <Heatmap objData={objData} />
        </div>

        <div
          style={{ borderColor: "#153f7b", border: "2px solid", margin: "5px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "stretch",
              backgroundColor: "#e4ebf3",
              // marginTop: "16px",
              marginLeft: "10px",
              marginRight: "10px",
              // height: "60px",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
              width="100%"
              // marginButton="10px"
              // padding="16px"
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                {arr.map((item) => (
                  <Tab label={item} />
                ))}

                {/* <Tab label="D1Q1" />
              <Tab label="D1Q2" />
              <Tab label="D2Q1" />
              <Tab label="D2Q2" /> */}
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
                  width: "27%",
                  color: "#e4ebf3",
                  padding: "6px",
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

          <div
            style={{
              flex: 1,
              // border: "1px solid #ccc",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "space",
              backgroundColor: "#e4ebf3",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          >
            <LineChartComp index={index} />
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
            }}
          >
            {/* <BarChart index={index} /> */}
            <BarandLineChart index={index} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sha;
