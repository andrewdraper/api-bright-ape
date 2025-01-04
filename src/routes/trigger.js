const express = require('express');
const router = express.Router();
const axios = require("axios");
const TriggerModel = require('../models/trigger.js');

const triggerModel = new TriggerModel();

// POST /behavior
router.post("/", express.urlencoded({ extended: true }), async (req, res) => {
  res.status(200).send('Webhook received');

  // Process the webhook asynchronously
  triggerModel.processWebhook(req.body);
});

module.exports = router; 