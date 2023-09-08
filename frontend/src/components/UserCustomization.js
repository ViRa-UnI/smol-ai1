frontend/src/components/UserCustomization.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCustomization = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch user's theme preference from the server
    axios.get('/api/user/theme')
      .then(response => {
        setTheme(response.data.theme);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleThemeChange = (newTheme) => {
    // Update user's theme preference on the server
    axios.put('/api/user/theme', { theme: newTheme })
      .then(response => {
        setTheme(newTheme);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>User Customization</h2>
      <label>
        Theme:
        <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default UserCustomization;
```

This code generates the UserCustomization component, which allows users to customize the app's appearance by selecting a theme (light or dark). The component fetches the user's theme preference from the server and updates it when the user selects a new theme. The theme preference is stored in the "theme" state variable. The handleThemeChange function sends a PUT request to the server to update the user's theme preference.