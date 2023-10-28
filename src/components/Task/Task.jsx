import React from 'react'
import './Task.css'

const Task = ({task, onComplete, onDelete}) => {
  return (
    <div>
        <div className="task">
          <input type='checkbox' className='checkContainer' onClick={()=> onComplete(task.id)} />
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        
      </button>

      <p className={task.isCompleted ? textCompleted : ""}>
        {task.title}
      </p>

      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        delete
      </button>
    </div>
    </div>
  )
}

export default Task