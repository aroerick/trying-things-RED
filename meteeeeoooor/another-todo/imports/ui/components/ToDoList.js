import React from 'react'
import PropTypes from 'prop-types'

const ToDoList = ({ todos, handleCheckbox, handleDelete }) => (
    <ul> 
        { todos.map((todo) => 
        <li key = { todo._id } > 
            { todo.text } 
            <input 
                id={todo._id}
                type="checkbox" 
                checked={ todo.isComplete }
                onChange = {() => handleCheckbox(todo)} />
            <label htmlFor={todo._id}></label>
            <button onClick={() => handleDelete(todo)}></button>
        </li>
        )} 
    </ul>
)

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired
        })
    )
}

export default ToDoList