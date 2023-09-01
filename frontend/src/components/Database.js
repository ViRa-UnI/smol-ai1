frontend/src/components/Database.js:
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Database = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/database');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Database</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Database;
```

This code generates the `Database` component in the file `frontend/src/components/Database.js`. The component fetches data from the `/api/database` endpoint and renders a list of items retrieved from the database.