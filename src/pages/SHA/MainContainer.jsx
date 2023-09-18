import React, { useState } from "react";
import Heatmap from "./Heatmap";
import LineChartComp from "./LineChartComp";
import BarChart from "./BarChart";
import BarandLineChart from "./BarandLineChart";
import { DatePicker } from "@mui/lab";
import { TextField, Tabs, Tab, Box, Typography } from "@mui/material";
import Navbar from "../../components/NavBar";
import data from "../../data.json";

const Sha = () => {
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
  let arr = [];

  const [activeTab, setActiveTab] = useState(0);
  const [objData, setObjData] = React.useState(
    data === null ? null : data["SHA"]
  );
  if (data !== null) {
    const obj = data["SHA"];
    // setObjData(data["SHA"]);
    arr = [];
    Object.keys(obj).map((item) => {
      if (obj[item].active === true) {
        arr.push(item);
      }
    });
  }
  const [index, setIndex] = useState(arr.length > 0 ? arr[0] : null);

  // React.useEffect(() => {}, [data]);
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
          {selectedDate !== null && data !== null ? (
            <Heatmap objData={data["SHA"]} />
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
                  width: "37%",
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

          {selectedDate !== null && data !== null && index !== null ? (
            <>
              <div
                style={{
                  flex: 1,
                  // border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "space",
                  backgroundColor: "#e4ebf3",
                  // marginLeft: "8px",
                  marginRight: "8px",
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

export default Sha;
