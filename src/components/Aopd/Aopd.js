import React  from "react";
import ReactPlayer from "react-player/youtube";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import "../Aopd/Aopd.css";
import { Container } from "@mui/system";
const Aopd = (props) => {

  if (props.mediaType === "video") 
  {
    return (
      <>
        <div id="container">
          <input
            id="datepicker"
            type="date"
            min="1995-06-16"
            defaultValue={new Date().toISOString().slice(0, 10)}
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => props.setSelectedDate(e.target.value)}
            value={props.selectedDate}
            // value={new Date().toISOString().slice(0, 10)}
            style={{ marginTop: "12px",marginBottom:"12px" }}
          />
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 0,
              m: 0,
              justifyContent: "center",
            }}
          >
            {props.loading ? (
              <Skeleton
                variant="rectangular"
                className="image"
                height={300}
                animation="wave"
              />
            ) : (
              <ReactPlayer
                url={props.url}
                controls
                playbackRate={2}
                width="600px"
                height="300px"
                style={{marginLeft:"5px",marginRight:"5px",marginBottom:"12px"}}
              />
            )}

            <Box
              sx={{
                width: 600,
                minWidth: "50%",
                marginLeft: 2,
                marginRight: 2,
                textAlign: "justify",
              }}
            >
              {props.loading ? (
                <Skeleton
                  variant="h5"
                  sx={{ borderRadius: 3, mb: 1 }}
                  animation="wave"
                />
              ) : (
                <Typography variant="h5" sx={{fontFamily:'"Audiowide", cursive'}}>{props.title}</Typography>
              )}
              {props.loading ? (
                <Skeleton
                  variant="caption"
                  sx={{ borderRadius: 3, mb: 1 }}
                  animation="wave"
                />
              ) : (
                <Typography variant="subtitle1" gutterBottom>
                  {props.copyright ? props.copyright : ""}
                </Typography>
              )}
              {props.loading ? (
                <Skeleton
                  variant="body2"
                  sx={{ borderRadius: 3, height: 300, mb: 2 }}
                  animation="wave"
                />
              ) : (
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {props.description}
                </Typography>
              )}
            </Box>
          </Container>
        </div>
      </>
    );
  }
  else{
    return (
      <>
      
        <div id="container">
          <input
            id="datepicker"
            type="date"
            min="1995-06-16"
            max={new Date().toISOString().slice(0, 10)}
            defaultValue={new Date().toISOString().slice(0, 10)}
            onChange={(e) => props.setSelectedDate(e.target.value)}
            value={props.selectedDate}
            style={{ marginTop: "12px" }}
          />
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 0,
              m: 0,
              justifyContent: "center",
            }}
          >
            {props.loading ? (
              <Skeleton
                variant="rectangular"
                className="image"
                height={300}
                animation="wave"
              />
            ) : (
              <img src={props.url} alt="Not Found" className="image" />
            )}
  
            <Box
              sx={{
                width: 600,
                minWidth: "50%",
                marginLeft: 2,
                marginRight: 2,
                textAlign: "justify",
              }}
            >
              {props.loading ? (
                <Skeleton
                  variant="h5"
                  sx={{ borderRadius: 3,mb:1,width:250 }}
                  animation="wave"
                />
              ) : (
                <Typography variant="h5" sx={{fontFamily:'"Audiowide", cursive'}}>{props.title}</Typography>
              )}
              {props.loading ? (
                <Skeleton
                  variant="caption"
                  sx={{ borderRadius: 3,mb:1,width:150 }}
                  animation="wave"
                />
              ) : (
                <Typography variant="subtitle1" gutterBottom>
                  {props.copyright ? props.copyright : ""}
                </Typography>
              )}
              {props.loading ? (
                <Skeleton
                  variant="body2"
                  sx={{ borderRadius: 3,height:300,mb:2 }}
                  animation="wave"
                />
              ) : (
                <Typography variant="body2" sx={{mb:2}}>{props.description}</Typography>
              )}
            </Box>
          </Container>
        </div>
      </>
    );
  }
};

export default Aopd;
