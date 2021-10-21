import React from 'react'
import '../styles/task.scss'

function Task({ task }) {
    return (
        <div className="task">
            <p>{task}</p>
        </div>
    )
}

export default Task
