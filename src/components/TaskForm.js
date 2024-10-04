import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (task.trim() === "") return; // Prevent adding empty tasks
    addTask(task); // Call the addTask function passed from the parent
    setTask(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
