import React, { Component } from "react";
class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };
  onEnter = e => {
    if (e.which === 13) this.props.onAdd(this.state.value);
  };
  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyPress={this.onEnter}
      />
    );
  }
}

export default AddBar;
