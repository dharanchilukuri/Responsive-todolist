import React from "react";

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((t, index) => (
        <li key={index} className={t.completed ? "completed" : ""}>
          <span onClick={() => toggleComplete(index)}>{t.text}</span>
          <button onClick={() => editTask(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
