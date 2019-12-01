import React, { Component } from "react";
import Header from "./Header/header.jsx";
import Main from "./Main/main.jsx";
import AddButton from "./AddButton/addbutton.jsx";
import AddBar from "./AddBar/addbar.jsx";
import ApiCallService from "./services/apiCall.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.url = "http://localhost:8080/todo";
    this.state = {
      todos: [],
      showAddBar: false
    };
  }
  componentDidMount() {
    let GetTasks = [];

    ApiCallService.getAllCall(this.url).then(res => {
      console.log(res.data);
      this.setState({ todos: res.data });
    });
  }
  handleDelete = toDoId => {
    ApiCallService.deleteCall(this.url + "/" + toDoId)
      .then(response => {
        ApiCallService.getAllCall(this.url).then(res => {
          console.log(res.data);
          this.setState({ todos: res.data });
        });
      })
      .catch(error => alert(error));
  };
  showAdd = () => {
    this.setState({ showAddBar: !this.state.showAddBar });
  };
  handleAdd = desc => {
    ApiCallService.postCall(this.url, {
      desc,
      checked: false
    })
      .then(response => {
        ApiCallService.getAllCall(this.url).then(res => {
          console.log(res.data);
          this.setState({ todos: res.data });
        });
      })
      .catch(error => {
        alert(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <AddButton addFunction={this.showAdd} />
        <Main onDelete={this.handleDelete} todos={this.state.todos} />
        {this.state.showAddBar ? <AddBar onAdd={this.handleAdd} /> : null}
      </React.Fragment>
    );
  }
}
export default App;
