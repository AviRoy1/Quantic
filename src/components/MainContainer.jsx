import React, { useState } from "react";
import Heatmap from "./Heatmap";
import LineChartComp from "./LineChartComp";
import BarChart from "./BarChart";
import BarandLineChart from "./BarandLineChart";
import { DatePicker } from "@mui/lab";
import { TextField, Tabs, Tab, Box } from "@mui/material";
import Navbar from "./NavBar";

const MainContainer = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
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
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "#e4ebf3",
        }}
      >
        <div
          style={{
            flex: 3,
            border: "1px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            margin: "8px",
            backgroundColor: "#e4ebf3",
          }}
        >
          <Heatmap />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "stretch",
            backgroundColor: "#e4ebf3",
            border: "1px solid #ccc",
            // margin: "8px",
            marginTop: "16px",
            marginLeft: "10px",
            height: "60px",
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
            justifyContent="flex-end"
            width="50%"
            // padding="6px"
            marginRight={"15px"}
            marginButton="15px"
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
                width: "29%",
                width: "24%",
                color: "#e4ebf3",
              }}
            />
            <style>
              {`
      /* Change the color of the calendar icon */
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1); /* This inverts the color of the icon */
      }
    `}
            </style>
          </Box>
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #ccc",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "space",
            backgroundColor: "#e4ebf3",
            // margin: "8px",
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
            margin: "20px",
          }}
        >
          <BarChart index={index} />
          <BarandLineChart index={index} />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
