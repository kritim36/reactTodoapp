
import { useEffect, useState } from 'react';
import './App.css'
import Tasks from './components/Tasks/Tasks'
import TodoForm from './components/todoform/TodoForm'

function App() {
  const LOCAL_STORAGE_KEY = 'TodoApp:tasks';

   const [tasks, setTasks] = useState([]);

   const loadSavedTasks=()=>{
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved));
    }
   }

   const SetTasksAndSave =(newTasks)=>{
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
   }
  
   useEffect(()=>{
    loadSavedTasks
   },[])
  
   const addTask=(taskTitle)=>{
    SetTasksAndSave([...tasks, {
      title: taskTitle,
      isCompleted: false,
      id: crypto.randomUUID()
    }])
   }
  
   const deleteTaskById=(taskId)=>{
    const newTasks = tasks.filter(task => task.id !==taskId);
    SetTasksAndSave(newTasks)
   }
  
   const toggleTaskCompletedById=(taskId)=>{
    const newTasks = tasks.map(task =>{
      if(task.id === taskId){
        return{
          ...task,
          iscompeted: !task.iscompleted
        }
      }
      return task;
    })
    SetTasksAndSave(newTasks);
   }
 


  return (
    <>
       <TodoForm handleAddTask={addTask} />
       <Tasks 
       tasks={tasks}
       onDelete={deleteTaskById}
       onComplete={toggleTaskCompletedById} />
    </>
  )
}

export default App
