frontend/src/components/TaskDetails.js:

```javascript
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/${taskId}`);
        setTask(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTask();
  }, [taskId]);

  if (!task) {
    return <div>Loading task details...</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Labels: {task.labels.join(', ')}</p>
    </div>
  );
};

export default TaskDetails;
```

This code generates the `TaskDetails` component, which displays the details of a specific task. It uses React Router's `useParams` hook to get the `taskId` from the URL. It then makes a GET request to the backend API to fetch the task details based on the `taskId`. Once the task data is fetched, it is displayed in the component. If the task data is not yet available, a loading message is shown.