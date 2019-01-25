import React from "react";
import hamburger from "../.././images/hamburger.png";
import { DragSource } from "react-dnd";

const Types = {
  ITEM: "bar"
};
const itemSource = {
  beginDrag(props) {
    /* code here */
    return {};
  },
  endDrag(props) {
    /* code here */
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class AddBar extends React.Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;
    return connectDragSource(
      <button className="actionButton">
        <img src={hamburger} alt="" />
        <span>Add bar</span>
      </button>
    );
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(AddBar);
