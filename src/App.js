import React, {useState} from "react";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);

  return (
    <div className="App">
      <Header photo={photo} setPhoto={setPhoto}/>
      <PhotoCard photo={photo}/>
    </div>
  );
}

export default App;
