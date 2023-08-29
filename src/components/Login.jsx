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

const backgroundImage = "https://wallpaperaccess.com/full/4492167.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.9)",
  },
  lockIcon: {
    fontSize: "48px",
    marginBottom: "16px",
    color: "#1976D2",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "16px",
  },
  button: {
    backgroundColor: "#1976D2",
    color: "#FFFFFF",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#004BA0",
    },
  },
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
      navigate("/Entry-Gate");
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
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <LockIcon className={classes.lockIcon} onClick={showForm} />
          <Typography variant="h5">Login</Typography>
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
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
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
