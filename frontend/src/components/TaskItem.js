frontend/src/components/TaskItem.js:

```javascript
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Labels: {task.labels.join(', ')}</p>
    </div>
  );
};

export default TaskItem;
```

This code generates the TaskItem component, which represents a single task in the todo app. It receives a `task` object as a prop and displays the task's title, description, due date, priority, and labels.