frontend/src/components/DarkMode.js:

```javascript
import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <label htmlFor="darkModeToggle">Dark Mode</label>
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;
```

This code generates the DarkMode component, which allows users to toggle between light and dark mode in the app. The component uses the `useState` and `useEffect` hooks from React to manage the state of the dark mode and apply the appropriate CSS class to the body element. The `toggleDarkMode` function is called when the checkbox is clicked, updating the dark mode state.