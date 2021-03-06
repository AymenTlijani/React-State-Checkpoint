import React, { Component } from "react";
import Profile from "./components/Profile/Profile";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = {
    show: false,
    count: 0,
  };
  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }

  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Profile
        </button>
        {this.state.show ? <Profile /> : null}
        <p>time {this.state.count} seconds</p>
      </div>
    );
  }
}
export default App;