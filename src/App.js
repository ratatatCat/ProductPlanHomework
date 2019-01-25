import React, { Component } from "react";
import SubNav from "./components/subNav/subNav";
import MainNav from "./components/mainNav/mainNav";
import RoadMap from "./components/roadMap/roadMap";
import SideBar from "./components/sideBar/sideBar";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <SubNav />
        <div className="roadContent">
          <RoadMap />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
