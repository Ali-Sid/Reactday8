import { Component } from "react";
import "./App.css";

// Header Component
export default class App extends Component {
    // declaring state
    state = {
      count: 0,
    }

    // Method which add one to the state
    addOne = () => {
      this.setState({count: this.state.count + 1})
    }

    // Method which subtract one to the state
    subOne = () => {
      this.setState({count: this.state.count - 1})
    }

    render() {
      // accessing the state value
      const count = this.state.count
      return (
        <div className='App'>
          <h1>{count} </h1>
          <div>
          <button style={{ fontSize: '24px', padding: '7px 15px' }} onClick={this.addOne}>+1</button>
          <button style={{ fontSize: '24px', padding: '7px 15px' }} onClick={this.subOne}>-1</button>
          </div>
        </div>
      )
    }
}
