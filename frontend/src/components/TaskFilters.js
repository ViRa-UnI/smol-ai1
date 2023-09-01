frontend/src/components/TaskFilters.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskFilters = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [labelFilter, setLabelFilter] = useState('');

  useEffect(() => {
    // Fetch tasks based on filters
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks', {
          params: {
            status: statusFilter,
            label: labelFilter
          }
        });
        const tasks = response.data;
        // Process tasks
        console.log(tasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [statusFilter, labelFilter]);

  return (
    <div>
      <h2>Task Filters</h2>
      <div>
        <label>Status:</label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="inProgress">In Progress</option>
        </select>
      </div>
      <div>
        <label>Label:</label>
        <select value={labelFilter} onChange={(e) => setLabelFilter(e.target.value)}>
          <option value="">All</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="shopping">Shopping</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;
```

This code generates the TaskFilters component, which allows users to filter tasks based on their status (completed or in progress) and label (personal, work, shopping, etc.). The component uses the useState and useEffect hooks from React to manage the filter state and fetch tasks from the backend API based on the selected filters. The fetched tasks are then processed (console.log) for demonstration purposes.