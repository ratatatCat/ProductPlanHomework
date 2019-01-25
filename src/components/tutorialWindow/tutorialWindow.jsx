import React from "react";
import "./tutorialWindow.scss";
import Tip1 from "./tip1";
import Tip2 from "./tip2";
import Tip3 from "./tip3";

export default class TutorialWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hidden",
      tip1hidden: "",
      tip2hidden: "hidden"
    };
    setTimeout(
      function() {
        this.setState({ hidden: "" });
      }.bind(this),
      2000
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.dropped !== nextProps.dropped) {
      nextProps.dropped
        ? this.setState({ hidden: "" })
        : this.setState({ hidden: "hidden" });

      nextProps.dropped
        ? this.setState({ tip2hidden: "" })
        : this.setState({ tip2hidden: "hidden" });

      nextProps.dropped
        ? this.setState({ tip1hidden: "hidden" })
        : this.setState({ tip1hidden: "" });
    }

    if (this.props.barDropped !== nextProps.barDropped) {
      nextProps.barDropped
        ? this.setState({ hidden: "" })
        : this.setState({ hidden: "hidden" });

      nextProps.barDropped
        ? this.setState({ tip3hidden: "" })
        : this.setState({ tip3hidden: "hidden" });

      nextProps.barDropped
        ? this.setState({ tip2hidden: "hidden" })
        : this.setState({ tip2hidden: "" });

      this.setState({ finished: true });
    }
  }

  hide = () => {
    this.setState({ hidden: "hidden" });

    if (this.state.finished) {
      this.props.resizeLane();
    }
  };

  render() {
    return (
      <div className={"tutorialWindow " + this.state.hidden}>
        <Tip1 hidden={this.state.tip1hidden} />
        <Tip2 hidden={this.state.tip2hidden} />
        <Tip3 hidden={this.state.tip3hidden} />
        <button onClick={this.hide}>Got it</button>
      </div>
    );
  }
}
