Here is the code for the file frontend/src/components/PerformanceMonitoring.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerformanceMonitoring = () => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get('/api/performance');
        setPerformanceData(response.data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, []);

  return (
    <div>
      <h2>Performance Monitoring</h2>
      {performanceData ? (
        <div>
          <p>Server Response Time: {performanceData.responseTime}ms</p>
          <p>Memory Usage: {performanceData.memoryUsage}MB</p>
          <p>CPU Load: {performanceData.cpuLoad}%</p>
        </div>
      ) : (
        <p>Loading performance data...</p>
      )}
    </div>
  );
};

export default PerformanceMonitoring;
```

This code sets up a functional component called `PerformanceMonitoring` that fetches performance data from the backend API and displays it on the frontend. It uses the `useState` and `useEffect` hooks from React to manage the component's state and perform the API request.

The component renders a heading "Performance Monitoring" and conditionally renders the performance data if it is available. Otherwise, it displays a loading message.

Please note that this code assumes the existence of a backend API endpoint `/api/performance` that returns the performance data in the following format:

```json
{
  "responseTime": 50,
  "memoryUsage": 100,
  "cpuLoad": 30
}
```

You will need to implement the backend API endpoint `/api/performance` to provide the performance data to the frontend.