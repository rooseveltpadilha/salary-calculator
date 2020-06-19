import React from "react";

export default class Bar extends React.Component {
  render() {
    const { value, color = "black" } = this.props;

    if (this.props.valueAll > 0) {
      return (
        <div
          style={{
            marginTop: "40px",
            width: value + "%",
            height: "20px",
            backgroundColor: color,
          }}
        />
      );
    } else {
      return null;
    }
  }
}
