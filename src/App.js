import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Photo from "./components/Photo";
import axios from "axios";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=hpzOmBXyZKNNBGuTsh8Vhceb6ldfvOuFscuUOcTm").then(response => {
      setPhoto(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log("no good – ", error);
    })
  },[]);

  return (
    <div className="App">
      <Header />
      <Photo photo={photo}/>
    </div>
  );
}

export default App;
