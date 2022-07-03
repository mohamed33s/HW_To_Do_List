import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    Tasks: [],
  };

  addTask = () => {
    this.setState({
      Tasks: this.state.Tasks.concat(document.getElementById("myInput").value),
    });
    if (this.state.Tasks !== "") {
      document.getElementById("myInput").value = null;
    }
  };

  delTask = () => {
    let ul = document.getElementById("myUL");
    ul.removeChild(ul.lastChild);
  };

  render() {
    let TaskList = this.state.Tasks.map((task) => {
      return <li>{task}</li>;
    });
    return (
      <div className="App">
        <h1>To Do List</h1>
        <input placeholder="Enter Your Task" id="myInput" type="text" />
        <button onClick={this.addTask}>add</button>
        <button onClick={this.delTask}>Delete</button>
        <ul id="myUL">{TaskList}</ul>
      </div>
    );
  }
}

export default App;
