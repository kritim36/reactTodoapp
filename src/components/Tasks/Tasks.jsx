import React from 'react'
import './Tasks.css'
import Task from '../Task/Task';


const Tasks = ({tasks, onDelete, onComplete}) => {
  const tasksQuantity = tasks.length;
  const completeedTasks = tasks.filter(task => task.iscompleted).length;
  return (
    <div>
        
          <header className="header">
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className="textPurple">Completed tasks</p>
          <span>{completeedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className="list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
          
        ))}
      </div> 
    
    </div>
  )
}

export default Tasks