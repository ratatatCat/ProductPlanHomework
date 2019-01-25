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
      <div className={"tip3 " + this.state.hidden}>
        <img src={addBar} alt="Add Bar" />
        <div>
          <h1>Alright let's set up a couple more</h1>
          <p>
            One they're added, you can share out your roadmap with your team.
          </p>
        </div>
      </div>
    );
  }
}
