import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    const trimmedTask = task.trim();
    if (trimmedTask) {
      const updatedTasks = [...tasks, trimmedTask].sort((a, b) => a.localeCompare(b));
      setTasks(updatedTasks);
      setTask(''); // clear input field
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnterKey}
        placeholder="Enter new task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
