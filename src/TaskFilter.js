import React, { useState } from 'react';

const TaskFilter = ({ tasks, setFilteredTasks }) => {
  const [filterStatus, setFilterStatus] = useState('All');

  const handleFilterChange = (status) => {
    setFilterStatus(status); // Update selected filter status
    if (status === 'All') {
      setFilteredTasks(tasks); // Show all tasks
    } else {
      const filtered = tasks.filter(task => task.status === status);
      setFilteredTasks(filtered); // Update filtered tasks based on status
    }
  };

  return (
    <div className="task-filter">
      <label>Filter by Status:</label>
      <select value={filterStatus} onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
