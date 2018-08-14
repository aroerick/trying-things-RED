import React from 'react'
import PropTypes from 'prop-types'

const ToDoList = ({ todos, handleCheckbox, handleDelete }) => (
    <ul> 
        { todos.map((todo) => 
        <li key = { todo.id } > 
            { todo.text } 
            <input 
                id={todo.id}
                type="checkbox" 
                checked={ todo.isComplete }
                onChange = {() => handleCheckbox(todo.id)} />
            <label htmlFor={todo.id}></label>
            <button onClick={() => handleDelete(todo.id)}></button>
        </li>
        )} 
    </ul>
)

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired
        })
    )
}

export default ToDoList