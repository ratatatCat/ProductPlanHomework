import React from "react";
import "./tutorialWindow.scss";
import addLane from "../.././images/addLane.png";

export default class Tip1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.hidden !== nextProps.hidden) {
      this.setState({ hidden: nextProps.hidden });
    }
  }

  render() {
    return (
      <div className={"tip1 " + this.state.hidden}>
        <img src={addLane} alt="Add Lane" />
        <div>
          <h1>We'll start with a lane</h1>
          <p>
            Lanes represent high level categories, such as teams, product lines,
            or strategic initiatives. Add a color and description to your lane
            to communicate valuable details to stakeholders.
          </p>
          <p>
            <b>Drag and drop a lane to get started</b>
          </p>
        </div>
      </div>
    );
  }
}
