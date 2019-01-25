import React from "react";
import "./lane.scss";
import Bar from "../bar/bar";
import Bar1 from "../bar/bar1";
import Bar2 from "../bar/bar2";

export default class Lane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hidden",
      laneHidden: "hidden"
    };
    this.barDroppedAction = this.barDroppedAction.bind(this);
    this.bar1DroppedAction = this.bar1DroppedAction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.show !== nextProps.show) {
      nextProps.show
        ? this.setState({ hidden: "" })
        : this.setState({ hidden: "hidden" });
    }

    if (this.props.dropped !== nextProps.dropped) {
      nextProps.dropped
        ? this.setState({ laneHidden: "" })
        : this.setState({ laneHidden: "hidden" });
    }

    if (nextProps.resize) {
      this.setState({ laneHidden: "largeLane" });
      this.setState({ barDropped: true });
    }
  }

  barDroppedAction() {
    this.props.barDropped();
  }

  bar1DroppedAction() {
    this.setState({ bar1Dropped: true });
  }

  render() {
    return (
      <div>
        <div className={"hoverLane " + this.state.hidden}>
          <p>Drop here</p>
        </div>
        <div />
        <div className={"lane " + this.state.laneHidden}>
          <div className="heading">
            <p>Lane</p>
          </div>
          <div className="barGroup">
            <Bar barDropped={this.barDroppedAction} />
            <Bar2 bar1dropped={this.state.bar1Dropped} />
          </div>
          <Bar1
            dropped={this.bar1DroppedAction}
            bardropped={this.state.barDropped}
          />
        </div>
      </div>
    );
  }
}
