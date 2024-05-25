import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);


  useEffect(() => {
    // Fetch tasks from backend when component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async (taskData) => {
    try {
      await axios.post('http://localhost:8080/api/tasks', taskData);
      fetchTasks(); // Refresh tasks after creating a new task
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      await axios.put(`http://localhost:8080/api/tasks/${taskId}`, taskData);
      fetchTasks(); // Refresh tasks after updating a task
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${taskId}`);
      fetchTasks(); // Refresh tasks after deleting a task
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container">
      <h1>Task Management System</h1>
      <TaskForm
        createTask={createTask}
        updateTask={updateTask}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
      <TaskFilter tasks={tasks} setTasks={setTasks} setFilteredTasks={setFilteredTasks} />
      <TaskList
        tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
        setTasks={setTasks}
        setSelectedTask={setSelectedTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;