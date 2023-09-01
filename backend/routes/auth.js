backend/routes/auth.js code:

```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration route
router.post('/register', authController.register);

// User login route
router.post('/login', authController.login);

module.exports = router;
```

Remember to generate code for the other files as well.