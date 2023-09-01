Here is the generated code for the file frontend/src/components/TaskComments.js:

```javascript
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TaskComments = () => {
  const { taskId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/tasks/${taskId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [taskId]);

  const renderComments = () => {
    return comments.map((comment) => (
      <div key={comment._id}>
        <p>{comment.text}</p>
        <p>Posted by: {comment.user}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Task Comments</h2>
      {renderComments()}
    </div>
  );
};

export default TaskComments;
```

This code sets up a functional component called `TaskComments` that fetches and displays the comments for a specific task. It uses React hooks (`useState` and `useEffect`) to manage state and perform the API request. The `useParams` hook is used to extract the `taskId` from the URL. The comments are fetched from the backend API using the `axios` library and stored in the `comments` state. The `renderComments` function maps over the comments array and renders each comment with its text and user information. Finally, the component returns a div containing the title "Task Comments" and the rendered comments.