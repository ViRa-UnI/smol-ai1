frontend/src/components/TaskList.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <p>Labels: {task.labels.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
```

This code generates the TaskList component, which displays a list of tasks fetched from the backend API. It uses the useState and useEffect hooks from React to manage the state and perform the API request. The axios library is used to make the HTTP GET request to retrieve the tasks. The tasks are then mapped over and rendered in the JSX.