import React, { useState } from "react";
import {
  CssBaseline,
  Paper,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LockIcon from "@mui/icons-material/Lock";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../Icons/login.png";
// const backgroundImage = "https://wallpaperaccess.com/full/4492167.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#5F88FE",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "350px",
    padding: "20px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    backgroundColor: "white",
    width: "100%",
    maxWidth: "400px",
    boxSizing: "border-box",
  },
  form: {
    width: "100%",
    marginTop: "20px",
  },
  button: {
    margin: "20px 0", // Add vertical margin
    backgroundColor: "#153f7d",
    color: "white",
  },

  // quant: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "blue",
  //   opacity: 0.1, // Adjusted opacity to 0.1
  //   zIndex: 1,
  // },
  // paxflow: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "red",
  //   opacity: 0.2, // Adjusted opacity to 0.2
  //   zIndex: 2,
  //   transition: "opacity 0.5s ease-in-out",
  // },
}));

function LoginPage() {
  const classes = useStyles();
  const [formVisible, setFormVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = () => {
    if (userName === "admin123" && password === "admin123") {
      toast.dismiss();
      toast.success("Welcome Back!!");
      navigate("/home");
    } else {
      toast.dismiss();
      toast.error("Invalid Email or Password !");
    }
  };

  const showForm = () => {
    setFormVisible(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main">
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.quant}></div>
          <div className={classes.paxflow}></div>
          <Typography variant="h5">
            <span
              style={{
                color: "#153f7b",
                fontWeight: "bolder",
                fontSize: "33px",
              }}
            >
              Quant-
            </span>
            <span style={{ color: "#153f7b", fontSize: "28px" }}>PaxFlow</span>
          </Typography>
          <form className={classes.form}>
            <TextField
              label="Username"
              variant="outlined"
              required
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              style={{
                marginTop: " 13px",
              }}
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              style={{
                margin: "13px",
                marginRight: "10px",
              }}
              className={classes.button}
              onClick={loginHandler}
            >
              Login
            </Button>
          </form>
        </Paper>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
        />
      </Container>
    </div>
  );
}

export default LoginPage;
