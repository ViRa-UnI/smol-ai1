frontend/src/components/TaskSearch.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchTasks = async () => {
      try {
        const response = await axios.get(`/api/tasks?search=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm) {
      searchTasks();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;
```

This code generates the `TaskSearch` component, which provides a search bar for users to quickly find tasks based on keywords. It uses the `useState` and `useEffect` hooks from React to manage the search term and search results. When the search term changes, it makes a GET request to the `/api/tasks` endpoint with the search term as a query parameter. The response data is then used to update the search results state, which is rendered as a list of task titles.