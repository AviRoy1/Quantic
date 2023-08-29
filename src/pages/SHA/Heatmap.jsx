import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";
import { Typography } from "@mui/material";
import jsonData from "../../data.json";
import person from "../../Icons/person-svgrepo-com.svg";
import profileCicle from "../../Icons/profile-circle-svgrepo-com (2).svg";

const HeatmapComponent = ({ objData }) => {
  // const xLabels = ["D1Q1", "D1Q2", "D2Q1", "D2Q2"];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "17px",
        width: "100%",
        alignItems: "start",
        maxHeight: "250px",
        marginLeft: "10px",
        marginRight: "10px",
        alignContent: "space-between",
      }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#153f7b",
          borderRadius: "10px",
          marginBottom: "15px",
        }}>
        <Typography variant="h5" gutterBottom style={{ marginLeft: "10px" }}>
          <Typography
            variant="h6"
            style={{
              color: "white",
              fontFamily: "bold",
              marginTop: "3px",
              marginLeft: "10px",
            }}>
            Frisks In Operation
          </Typography>
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "16px",
          justifyContent: "space-between",
          margin: "3px 0",
          marginBottom: "15px",
        }}>
        {Object.keys(objData).map((item) => (
          <div
            key={item}
            style={{
              width: "82px",
              height: "40px",
              marginLeft: "10px",
              backgroundColor:
                objData[item].active === true ? "#C0F6D5" : "#FABFBF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapComponent;
