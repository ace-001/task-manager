import React from 'react';

const TaskList = ({ tasks, setTasks, setSelectedTask, deleteTask }) => {
  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <span>Status: {task.status}</span>
            </div>
            <div>
              <button onClick={() => handleEditTask(task)}>Edit</button>
              {/* Add margin-right to create space */}
              <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: '8px' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
