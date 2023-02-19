import React from "react";
import "../Home/Home.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import bg from "../../img/bg2.gif";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="main_container">
      <Container id="content" maxWidth="lg">
        <img src={bg} alt="Not found" width={300} height={300} />
       
          <Typography
            variant="h4"
            id="text1"
            sx={{ fontFamily: '"Audiowide", cursive', textAlign: "center" }}
          >
            Welcome To APOD
          </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Astronomical Picture of The Day
        </Typography>
        <button
          className="cssbuttons-io-button"
          onClick={() => navigate("/aopd")}
        >
          Picture of The Day
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </Container>
    </div>
  );
};

export default Home;
