frontend/src/components/UserAnalytics.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserAnalytics = () => {
  const [userCount, setUserCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('/api/users/count');
        setUserCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTaskCount = async () => {
      try {
        const response = await axios.get('/api/tasks/count');
        setTaskCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserCount();
    fetchTaskCount();
  }, []);

  return (
    <div>
      <h2>User Analytics</h2>
      <p>Total Users: {userCount}</p>
      <p>Total Tasks: {taskCount}</p>
    </div>
  );
};

export default UserAnalytics;
```

This code generates the UserAnalytics component, which displays the total number of users and tasks in the app. It uses the useState and useEffect hooks from React to fetch the counts from the backend API and update the state accordingly. The counts are then rendered in the component's JSX.