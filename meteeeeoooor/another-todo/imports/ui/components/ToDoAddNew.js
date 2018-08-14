import React from 'react'

const ToDoAddNew = ({ inputRef, handleNewTodo }) => {
    return (
        <div className="add-todo">
            <form onSubmit={e => handleNewTodo(e)}>
                <input type="text" ref={ inputRef } placeholder="Add Todo" />
                <span>(press enter to add)</span>
            </form>
        </div>
    )
}

export default ToDoAddNew