frontend/src/components/ErrorHandling.js:

```javascript
import React from 'react';

const ErrorHandling = () => {
  const handleOnError = (error) => {
    // Log the error or send it to a logging service
    console.error(error);
    // Display a user-friendly error message
    alert('An error occurred. Please try again later.');
  };

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default ErrorHandling;
```

This code sets up a basic error handling component in React. It includes a `handleOnError` function that logs the error and displays a user-friendly error message. You can customize the error message and add any additional error handling logic as needed within the `handleOnError` function.