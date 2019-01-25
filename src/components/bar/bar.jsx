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

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hide",
      barHidden: "hidden"
    };
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div>
        <div className={"hoverBar " + this.state.hidden} />
        <div className={"bar " + this.state.barHidden}>
          <div>
            <p>Roadmap Item 1</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DropTarget(Types.ITEM, barTarget, collect)(Bar);
