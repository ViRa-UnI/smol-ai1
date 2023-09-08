frontend/src/components/Register.js:

```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { email, password });
      console.log(response.data);
      // Redirect to login page or display success message
    } catch (error) {
      console.error(error);
      // Display error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
```

This code generates the Register component for user registration. It uses React hooks to manage the form state and axios for making HTTP requests to the backend API. The handleRegister function is called when the form is submitted, sending the email and password to the '/api/register' endpoint. The response is logged to the console, but you can modify it to redirect to the login page or display a success message. Any errors are caught and logged to the console as well.