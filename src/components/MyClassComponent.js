import React, { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

 incrementFun = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementFun}>Increment</button>
      </div>
    );
  }
}
export default MyClassComponent;
