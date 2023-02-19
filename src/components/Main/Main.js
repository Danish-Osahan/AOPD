import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Aopd from "../Aopd/Aopd";

// import { DatePicker } from "antd";
import "../Main/Main.css";

const Main = () => {
  const [img, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [copyright, setCopyright] = useState("");
  const [description, setDescription] = useState("");
  const [loading ,setLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().slice(0, 10));
  };

  // const add = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=2020-02-03&`;
  const add = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${selectedDate}&`;

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(add);
        console.log(data);
        if (data.copyright) {
          setCopyright(data.copyright);
        }
        setImage(data.url);
        setTitle(data.title);
        setMediaType(data.media_type);
        setDescription(data.explanation);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };
    fetch();
  }, [selectedDate,add]);
  console.log(selectedDate);
 
  return (
    <>
      <div id="main">
        <Aopd
          url={img}
          mediaType={mediaType}
          title={title}
          handleDateChange={handleDateChange}
          description={description}
          copyright={copyright}
          setSelectedDate={setSelectedDate}
          loading={loading}
        />
      </div>

    </>
  );
};

export default Main;
