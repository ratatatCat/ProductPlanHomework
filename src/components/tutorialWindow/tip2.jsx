import React from "react";
import "./tutorialWindow.scss";
import addBar from "../.././images/addBar.png";

export default class Tip1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hidden"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.hidden !== nextProps.hidden) {
      this.setState({ hidden: nextProps.hidden });
    }
  }

  render() {
    return (
      <div className={"tip2 " + this.state.hidden}>
        <img src={addBar} alt="Add Bar" />
        <div>
          <h1>Awesome! Now let's add few bars.</h1>
          <p>
            Bars are your specific initiative. Use them to represent your epics,
            projects, or taks, and provide an at a glance view of priority,
            relationships and progress.
          </p>
          <p>
            <b>Drag and drop a bar to get started</b>
          </p>
        </div>
      </div>
    );
  }
}
