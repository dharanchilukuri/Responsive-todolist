import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";

function Body() {
  const [tasks, setTasks] = useState([]);  // To store tasks
  const [filter, setFilter] = useState("all");  // To manage filter state

  // Function to add task to the list
  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  // Function to toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to edit a task
  const editTask = (index) => {
    const newTaskText = prompt("Edit task:", tasks[index].text);
    if (newTaskText) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: newTaskText } : task
      );
      setTasks(updatedTasks);
    }
  };

  // Filtering tasks based on the selected filter
  const filteredTasks =
    filter === "completed"
      ? tasks.filter((task) => task.completed)
      : filter === "incomplete"
      ? tasks.filter((task) => !task.completed)
      : tasks;

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskFilters filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Body;
