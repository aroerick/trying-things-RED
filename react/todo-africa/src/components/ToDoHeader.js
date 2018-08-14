import React from 'react'
import PropTypes from 'prop-types'

const ToDoHeader = ({appTitle}) => (
    <header className="App-header"> 
        <h1 className="App-title">{ appTitle }</h1>
    </header>
)

ToDoHeader.defaultprops = {
    appTitle: 'Todos.'
}

ToDoHeader.propTypes = {
    appTitle: PropTypes.string
}

export default ToDoHeader