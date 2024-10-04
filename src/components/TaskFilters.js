import React from "react";

function TaskFilters({ filter, setFilter }) {
  return (
    <div className="task-filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incomplete")}>Incomplete</button>
    </div>
  );
}

export default TaskFilters;
