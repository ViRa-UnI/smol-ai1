frontend/src/components/Login.js:

```javascript
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      // Handle successful login, e.g. store token in local storage
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      // Handle login error, e.g. display error message
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

This code generates the Login component for the frontend of your MERN stack todo app. It includes a form for users to enter their email and password, and a submit button to trigger the login process. The component uses React hooks to manage the form state and the useHistory hook from react-router-dom to redirect the user after successful login. The handleLogin function sends a POST request to the backend API endpoint for login authentication. If the login is successful, the user's token is stored in local storage and the user is redirected to the dashboard page. If there is an error during login, the error is logged to the console.