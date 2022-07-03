import { Component } from "react";
import "./App.css";

class App extends Component {
  
  addTask= () => {
    let ul = document.getElementById("myUL");
    let li = document.createElement("li");
    let inputValue=document.getElementById("myInput").value;
    li.appendChild(document.createTextNode(inputValue));
    ul.appendChild(li);
    document.getElementById("myInput").value = "";
  };

  delTask= () => {
    let ul = document.getElementById("myUL");
    ul.removeChild(ul.lastChild);

  }

  render() {
    return (
      <div className="App">
        <p>
          <strong>To Do List</strong>
        </p>
        <input id="myInput" type="lable" />
        <button id="toDo" onClick={this.addTask}>
          Submit
        </button>
        <button id="toDo" onClick={this.delTask}>
          Delete
        </button>
        <ul id="myUL"></ul>
      </div>
    );
  }
}

export default App;
