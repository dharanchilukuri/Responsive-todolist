import React from "react";

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <ul>
        {tasks.length > 0 && (
        <p className="info-text">Click anywhere on the text to mark it as completed</p>
        )}  
      {tasks.map((t, index) => (
         <li
         key={index}
         onClick={() => toggleComplete(index)}
         className={t.completed ? "completed" : ""}
         style={{ cursor: "pointer" }}
       >
         <span className="task-text">{t.text}</span>
         <button onClick={(e) => {
            e.stopPropagation(); 
            editTask(index);
          }}>Edit</button>
          <button onClick={(e) => {
            e.stopPropagation(); 
            deleteTask(index);
          }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
