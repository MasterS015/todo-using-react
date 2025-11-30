import React, {useState} from 'react'

const Task = ({title, description, id, setTasks, tasks}) => {
    const [toggle, setToggle] = useState(false);
    const [done, setDone] = useState(false);
    const handleDelete = (id) => {
      const updatedTasks = tasks.filter((_, index) => index !== id);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  return (
    <> 
    <div className="task-container">
      <div className='task-header'>
        <input className="task-checkbox" onChange={() => setDone(!done)} type='checkbox'/>
        <h1 style={{ textDecoration: done ? 'line-through' : 'none' }}>{title}</h1>
        <p className="task-desc">{toggle && description}</p>
        <button className="togglebtn" onClick={() => setToggle(!toggle)}>{toggle ? 'Hide Details' : 'Show Details'}</button>
        <button className="delete" onClick={() => handleDelete(id)}>Delete task</button>
      </div> 
    </div>
    </>
  )
}   

export default Task