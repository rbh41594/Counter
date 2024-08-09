import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with a count of 0
    this.state = {
      count: 0,
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // Method to reset the count
  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
