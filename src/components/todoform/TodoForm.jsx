import React, { useState } from 'react'
import './TodoForm.css'

const TodoForm = ({handleAddTask}) => {
    const [title,setTitle] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAddTask(title);
        setTitle('');
    }
    const onChangeTitle = (e)=>{
      setTitle(e.target.value);
    
    }
    
  return (
    <div>
    <div className = "header">
     <h1>Todo</h1>
      <form onSubmit={handleSubmit} className="newTaskForm">
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button>Create </button>
      </form>
    </div>
    </div>
  )
}

export default TodoForm