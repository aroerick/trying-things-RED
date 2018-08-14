import React from 'react'
import PropTypes from 'prop-types'

const ToDoFooter = ({ todoCount, handleClearCompleted }) => {
    let todoText = ''
    switch(todoCount) {
        case 0: todoText = 'Hey now, you\'re an All-Star!'
        break
        case 1: todoText = `${todoCount} todo`
        break
        default: todoText = `${todoCount} todos`
    }
    return(
        <footer className="todo-admin"> 
            <span>{ todoText }</span>
            <button onClick={ () => handleClearCompleted() }>Clear Completed</button>
        </footer>
    )
}

ToDoFooter.propTypes = {
    todoCount: PropTypes.number.isRequired,
    handleClearCompleted: PropTypes.func.isRequired
}

export default ToDoFooter