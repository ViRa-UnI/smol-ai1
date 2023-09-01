Here is the code for the file backend/middleware/authMiddleware.js:

```javascript
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user object to the request
    req.user = decoded.user;

    // Proceed to the next middleware
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
```

This code implements the authentication middleware for user authorization. It checks for the presence of a token in the request header and verifies its validity using the JWT library. If the token is valid, it attaches the decoded user object to the request and proceeds to the next middleware. Otherwise, it returns an error response.

Please note that this code assumes the presence of the `jsonwebtoken` library and the `JWT_SECRET` environment variable. Make sure to install the `jsonwebtoken` library and set the `JWT_SECRET` environment variable before using this code.