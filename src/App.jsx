import React, { useEffect, useState } from 'react'
import Task from './components/Task';

const App = () => {
  const [title, settitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = (e) => {
    settitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
    settitle('');
    setDescription('');
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <>
    <div className="app-container">
        <div className="input-container">
          <input className="inputs"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={handleTitleChange}
          />
          <input className="inputs"
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={handleDescriptionChange}
          /> 
          <button className="submitbtn" onClick={handleSubmit}>Add Task</button>
        </div>
        <div className="tasks-panel">
          {tasks.map((task,index) => {
            return(
              <div key={index} className="task-item">
                <Task title={task.title} description={task.description} id={index} setTasks={setTasks} tasks={tasks}/>
              </div>
            )
          })}
        </div>
    </div> 
    </>
  )
}

export default App