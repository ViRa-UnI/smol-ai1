frontend/src/components/TaskSharing.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskSharing = () => {
  const [email, setEmail] = useState('');
  const [sharedTasks, setSharedTasks] = useState([]);

  useEffect(() => {
    // Fetch shared tasks from the server
    const fetchSharedTasks = async () => {
      try {
        const response = await axios.get('/api/tasks/shared');
        setSharedTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSharedTasks();
  }, []);

  const handleShareTask = async () => {
    try {
      // Send a request to share the task with the specified email
      await axios.post('/api/tasks/share', { email });
      setEmail('');
      // Fetch updated shared tasks from the server
      const response = await axios.get('/api/tasks/shared');
      setSharedTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnshareTask = async (taskId) => {
    try {
      // Send a request to unshare the task with the specified ID
      await axios.delete(`/api/tasks/shared/${taskId}`);
      // Fetch updated shared tasks from the server
      const response = await axios.get('/api/tasks/shared');
      setSharedTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Task Sharing</h2>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleShareTask}>Share Task</button>
      </div>
      <div>
        <h3>Shared Tasks:</h3>
        {sharedTasks.length > 0 ? (
          <ul>
            {sharedTasks.map((task) => (
              <li key={task._id}>
                {task.title}{' '}
                <button onClick={() => handleUnshareTask(task._id)}>
                  Unshare
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No shared tasks.</p>
        )}
      </div>
    </div>
  );
};

export default TaskSharing;
```

This code generates the `TaskSharing` component, which allows users to share tasks with other users by entering their email addresses. It fetches shared tasks from the server, displays a list of shared tasks, and provides options to share and unshare tasks.