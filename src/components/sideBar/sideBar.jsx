import React from "react";
import "./sideBar.scss";
import AddLane from "./addLane";
import AddBar from "./addBar";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="sideBar">
        <AddLane />
        <AddBar />
      </div>
    );
  }
}
