import React from "react";
import "./bar.scss";
import { DropTarget } from "react-dnd";

const Types = {
  ITEM: "bar"
};
const barTarget = {
  drop(props, monitor, component) {
    component.setState({ hidden: "hidden" });
    component.setState({ barHidden: "" });
    component.setState({ placed: true });
    if (props.barDropped) props.barDropped();
  },

  hover(props, monitor, component) {
    if (!component.state.placed) {
      component.setState({ hidden: "" });
      component.setState({ barHidden: "hidden" });
    }
  }
};

function collect(connect, monitor) {
  console.log(monitor.isOver());
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Bar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hide",
      barHidden: "hidden",
      hover: "hidden"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bar1dropped !== nextProps.bar1dropped) {
      nextProps.bar1dropped
        ? this.setState({ hover: "" })
        : this.setState({ hover: "hidden" });
    }
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={this.state.hover}>
        <div className={"hoverBar bar2 " + this.state.hidden} />
        <div className={"bar bar2 " + this.state.barHidden}>
          <div>
            <p>Roadmap Item 3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DropTarget(Types.ITEM, barTarget, collect)(Bar2);
