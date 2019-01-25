import React from "react";
import "./roadMap.scss";
import TutorialWindow from "../tutorialWindow/tutorialWindow";
import { DropTarget } from "react-dnd";
import Lane from "../lane/lane";

const Types = {
  ITEM: "lane"
};
const roadMapTarget = {
  drop(props, monitor, component) {
    component.setState({ isDropped: true });
  }
};

function collect(connect, monitor) {
  console.log(monitor.isOver());
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class RoadMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropped: false,
      resizeLane: false
    };
    this.updateWindow = this.updateWindow.bind(this);
    this.resizeLane = this.resizeLane.bind(this);
  }

  updateWindow() {
    this.setState({ barDropped: true });
  }

  resizeLane() {
    this.setState({ resizeLane: true });
  }

  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div className="roadMap">
        <div className="dateSpan">
          <div className="yearSpan">
            <span>2018</span>
          </div>
          <div className="quarterSpan">
            <span>Q1 2019</span>
            <span className="right">Q2</span>
          </div>
          <div className="quarterSpan">
            <span>Q3</span>
            <span className="right">Q4</span>
          </div>
        </div>
        <TutorialWindow
          dropped={this.state.isDropped}
          barDropped={this.state.barDropped}
          resizeLane={this.resizeLane}
        />
        <Lane
          show={isOver}
          dropped={this.state.isDropped}
          barDropped={this.updateWindow}
          resize={this.state.resizeLane}
        />
      </div>
    );
  }
}

export default DropTarget(Types.ITEM, roadMapTarget, collect)(RoadMap);
