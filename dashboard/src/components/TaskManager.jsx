import React from 'react';

const TaskManager = ({ tasks }) => {
  return (
    <div className="task-manager">
      <h3>Task Management</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong> - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
