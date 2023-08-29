import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  MoreVert,
  Notifications,
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import entryGgate from "../Icons/ENTRNACE-01.svg";
import psha from "../Icons/PSHA-011.svg";
import sha from "../Icons/SHA-01.svg";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CircleIcon from "@mui/icons-material/Circle";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Entry-Gate");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    // setAnchorEl(null);
    navigate("/");
  };
  const handleItemClick = (text) => () => {
    setSelectedItem(text);
    setOpenDrawer(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        width: 300, // Adjust the width value
        borderRight: "1px solid #ccc",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List sx={{ flexGrow: 1, minWidth: "100%", width: "100%" }}>
        {["Entry-Gate", "PSHA", "SHA"].map((text) => (
          <ListItem
            button
            key={text}
            onClick={handleItemClick(text)}
            sx={{
              backgroundColor: selectedItem === text ? "#153f7d" : "white",
              display: "flex",
              alignItems: "center",
              width: "100%",
              color: selectedItem === text ? "white" : "black", // Set text color based on selection
            }}
          >
            <Link
              to={`/${text}`}
              onClick={() => handleItemClick(text)}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              {text === "Entry-Gate" ? (
                <img
                  src={entryGgate}
                  alt="icon"
                  style={{ width: "50px", height: "50px" }}
                />
              ) : text === "PSHA" ? (
                <img
                  src={psha}
                  alt="icon"
                  style={{ width: "40px", height: "40px" }}
                />
              ) : (
                <img
                  src={sha}
                  alt="icon"
                  style={{ width: "40px", height: "40px" }}
                />
              )}
              <ListItemText primary={text} sx={{ marginLeft: "10px" }} />
            </Link>
          </ListItem>
        ))}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            backgroundColor: "#5D8BBF",
            borderRadius: "10px",
            justifyContent: "start",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "120px",
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
              marginRight: "10px",
            }}
          >
            {selectedItem !== "SHA" ? "Security Status" : "Frisks"}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            justifyContent: "start",
            marginLeft: "10px",
            marginRight: "10px",
            flexDirection: "row",
            marginTop: "8px",
          }}
        >
          {selectedItem !== "SHA" ? (
            <AccessibilityNewIcon
              style={{
                height: "28px",
                width: "28px",
                color: "green",
                marginLeft: "10px",
              }}
            />
          ) : (
            <CircleIcon
              style={{
                height: "20px",
                width: "20px",
                color: "green",
                marginLeft: "10px",
              }}
            />
          )}
          <h4 style={{ marginLeft: "10px" }}>
            {selectedItem !== "SHA" ? "Manned" : "Open"}
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            justifyContent: "start",
            marginLeft: "10px",
            marginRight: "10px",
            flexDirection: "row",
            marginTop: "-12px",
          }}
        >
          {selectedItem !== "SHA" ? (
            <AccessibilityNewIcon
              style={{
                height: "28px",
                width: "28px",
                color: "red",
                marginLeft: "10px",
              }}
            />
          ) : (
            <CircleIcon
              style={{
                height: "20px",
                width: "20px",
                color: "red",
                marginLeft: "10px",
              }}
            />
          )}
          <h4 style={{ marginLeft: "10px" }}>
            {selectedItem !== "SHA" ? "Unmanned" : "Close"}
          </h4>
        </div>
      </List>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "90%",
          backgroundColor: "#153f7d",
          borderRadius: "10px",
          justifyContent: "center",
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "260px",
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
            marginRight: "10px",
          }}
        >
          Logout
        </Typography>
      </div>
    </div>
  );

  return (
    <div className="navbar-container">
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="black"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "#153f7d", mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: "#153f7d",
                fontWeight: "bolder",
                fontSize: "25px",
              }}
            >
              QUANTIC
            </Typography>
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: "#153f7d", mr: 1 }}
            >
              <MoreVert />
            </IconButton>
            <IconButton
              size="large"
              aria-label="notifications"
              sx={{ color: "#153f7d", mr: 1 }}
            >
              <Notifications />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account"
              sx={{ color: "#153f7d" }}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 1500, width: 300 }}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Navbar;
