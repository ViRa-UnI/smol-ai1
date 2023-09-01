frontend/src/components/Notifications.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id}>
          <p>{notification.message}</p>
          <p>{notification.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
```

This code generates the Notifications component, which displays a list of notifications fetched from the backend API. The component uses React's useState and useEffect hooks to manage the state and fetch the notifications data. The useEffect hook is used to fetch the notifications when the component mounts. The fetched notifications are stored in the state variable "notifications" and rendered in the JSX.