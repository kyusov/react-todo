import React from 'react'
import Task  from './Task'
import '../styles/taskList.scss'

function TaskList({ tasks }) {
    return <div className="taskList">
        {tasks && tasks.map(e => <Task key={e.id} task={e.text}/>)}
    </div>
}

export default TaskList
