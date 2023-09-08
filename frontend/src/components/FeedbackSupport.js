frontend/src/components/FeedbackSupport.js:

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackSupport = () => {
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [feedback]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/feedback', { feedback });
      setFeedback('');
      setLoading(false);
      console.log(response.data); // Handle successful feedback submission
    } catch (error) {
      setLoading(false);
      setError('Failed to submit feedback. Please try again later.'); // Handle error
    }
  };

  return (
    <div>
      <h2>Feedback and Support</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default FeedbackSupport;
```

This code generates the frontend/src/components/FeedbackSupport.js file for the todo app. It includes a form for users to submit feedback and support requests. The form sends a POST request to the '/api/feedback' endpoint with the feedback message. The component handles loading and error states, displaying appropriate messages to the user.