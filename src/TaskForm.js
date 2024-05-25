import React, { useState, useEffect } from 'react';

const TaskForm = ({ createTask, updateTask, selectedTask, setSelectedTask }) => {
  const [formData, setFormData] = useState({ title: '', description: '', status: 'To Do' });

  useEffect(() => {
    if (selectedTask) {
      setFormData(selectedTask);
    } else {
      setFormData({ title: '', description: '', status: 'To Do' });
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === '') {
      alert('Title cannot be empty!');
      return;
    }

    if (selectedTask) {
      updateTask(selectedTask.id, formData);
    } else {
      createTask(formData);
    }

    setFormData({ title: '', description: '', status: 'To Do' });
    setSelectedTask(null);
  };

  return (
    <div className="task-form">
      <h2>{selectedTask ? 'Edit Task' : 'Create New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit">{selectedTask ? 'Update Task' : 'Create Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
