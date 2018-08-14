import React, { Component } from 'react'
import './App.css'
import ToDoHeader from './components/ToDoHeader'
import ToDoFooter from './components/ToDoFooter'
import ToDoList from './components/ToDoList'
import ToDoAddNew from './components/ToDoAddNew'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todos: [ 
        { id: 0, text: 'So much to see', isComplete: false },
        { id: 1, text: 'So what\'s wrong with', isComplete: false },
        { id: 2, text: 'Taking the back street', isComplete: false },
        { id: 3, text: 'You\'ll never know', isComplete: false },
        { id: 4, text: 'If you don\'t go', isComplete: false },
        { id: 5, text: 'You\'ll never shine', isComplete: false },
        { id: 6, text: 'If you don\'t glow', isComplete: false}
      ],
      nextId: 0
    }
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    console.log('yay')
  }

  componentDidUpdate() {
    console.log('wha')
  }

  handleClearCompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.isComplete)
    this.setState({ todos })
  }

  handleCheckbox = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    this.setState({ todos })
  }

  handleDelete = id => {
    const todos = this.state.todos.filter(todo => (
      id !== todo.id
    ))
    this.setState({ todos })
  }

  handleNewTodo = e => {
    e.preventDefault()
    const lastTodoId = this.state.todos[this.state.todos.length - 1].id
    const newTodo = {
      id: lastTodoId + 1,
      text: this.inputRef.current.value,
      isComplete: false
    }
    const todos = this.state.todos.concat(newTodo)
    this.setState({ todos })
    this.inputRef.current.value = ''
  }

  render() {

    return (
      <div className="todo-list">
        <ToDoHeader appTitle = 'So Much To Do' />
        <ToDoAddNew 
          inputRef = { this.inputRef }
          handleNewTodo = { e => this.handleNewTodo(e) }/>
        { this.state.todos.length > 0 && 
        <ToDoList 
          todos = { this.state.todos } 
          handleCheckbox = { id => this.handleCheckbox(id) } 
          handleDelete = { this.handleDelete }/> }
        <ToDoFooter 
          todoCount = { this.state.todos.length } 
          handleClearCompleted = { this.handleClearCompleted }
        />
      </div>
    )
  }
}

export default App;