frontend/src/components/RealTimeUpdates.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RealTimeUpdates = () => {
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

    // Set up WebSocket connection
    const socket = new WebSocket('ws://localhost:8000');

    // Handle incoming WebSocket messages
    socket.onmessage = (event) => {
      const updatedTask = JSON.parse(event.data);
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        );
        return updatedTasks;
      });
    };

    // Clean up WebSocket connection
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Updates</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeUpdates;
```

This code sets up a component called `RealTimeUpdates` that fetches tasks from the server using an HTTP GET request and displays them in a list. It also establishes a WebSocket connection to receive real-time updates for tasks. When a task is updated through the WebSocket, the component updates the corresponding task in the state.

Note: Replace `'ws://localhost:8000'` with the actual WebSocket server URL in your application.