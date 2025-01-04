const express = require('express');
const router = express.Router();
const triggerRouter = require('./trigger');

// Root route
router.get('/', (req, res) => {
  console.log('Root endpoint accessed.')
  res.json({ status: 200, message: "Welcome to the Bright Ape API" });
});

// Register routes
router.use('/trigger-workflow', triggerRouter);

module.exports = router; 