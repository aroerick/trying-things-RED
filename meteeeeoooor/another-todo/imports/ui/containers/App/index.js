import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";

import { ToDos } from "../../../api/todos";

import ToDoHeader from "../../components/ToDoHeader";
import ToDoFooter from "../../components/ToDoFooter";
import ToDoList from "../../components/ToDoList";
import ToDoAddNew from "../../components/ToDoAddNew";
import AccountsWrapper from "../../components/AccountsWrapper/";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log("yay");
  }

  componentDidUpdate() {
    console.log("wha");
  }

  handleClearCompleted = () => {
    Meteor.call('todos.clearComplete')
  };

  handleCheckbox = todo => {
    Meteor.call('todos.toggleComplete', todo)
  };

  handleDelete = todo => {
    Meteor.call('todos.deleteTodo', todo)
  };

  handleNewTodo = event => {
    event.preventDefault();
    let inputRef = this.inputRef.current;

    if (inputRef.value) {
      Meteor.call('todos.addNewTodo', {
        text: inputRef.value,
        isComplete: false,
        owner: this.props.currentUserId
      },
    )
      inputRef.value = "";
    }
  };

  render() {
    const { todos, currentUserId } = this.props;

    return (
      <div className="app-wrapper">
        <div className="login-wrapper">
          <AccountsWrapper />
        </div>
        <div className="todo-list">
          <ToDoHeader appTitle="So Much To Do" />
          {!currentUserId ? (
            <div className="logged-out-message">
              <p>Please sign in to see your todos.</p>
            </div>
          ) : (
            <div>
              <ToDoAddNew
                inputRef={this.inputRef}
                handleNewTodo={e => this.handleNewTodo(e)}
              />
              {todos.length > 0 && (
                <ToDoList
                  todos={todos}
                  handleCheckbox={this.handleCheckbox}
                  handleDelete={this.handleDelete}
                />
              )}
              <ToDoFooter
                todoCount={todos.length}
                handleClearCompleted={this.handleClearCompleted}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string,
  todos: PropTypes.array.isRequired
};

App.defaultProps = {
  currentUser: undefined,
  currentUserId: undefined,
  todos: []
};

export default withTracker(() => {
  Meteor.subscribe('todos');
  
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    todos: ToDos.find({ owner: Meteor.userId() }).fetch()
  };
})(App);
