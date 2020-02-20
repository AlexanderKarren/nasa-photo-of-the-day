import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import Rover from "./Rover.js"
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header photo={photo} setPhoto={setPhoto}/>
        <Route exact path="/" render={props=> (
          <React.Fragment>
            <PhotoCard photo={photo}/>
          </React.Fragment>
        )}/>
        <Route path="/rover" component={Rover} />
      </div>
    </Router>
  );
}

export default App;
