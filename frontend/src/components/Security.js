Here is the code for the file frontend/src/components/Security.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Security = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>Security</h2>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in to access this page.</p>
      )}
    </div>
  );
};

export default Security;
```

This code sets up a functional component called `Security` that displays a welcome message if the user is logged in. It makes an HTTP GET request to the `/api/user` endpoint to fetch the user data and updates the state with the response. The user data is then rendered conditionally based on whether the user is logged in or not.

Please note that this code assumes the existence of an `/api/user` endpoint on the backend that returns the user data. You will need to implement this endpoint in the backend code.