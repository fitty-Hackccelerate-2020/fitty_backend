const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const validators = require('../middlewares/validators');

const router = express.Router();

const initiate = require('./initiate');
const getTodaysTask = require('./getTodaysTask');

router.post(
  '/initiate',
  isAuthenticated,
  validators.initiateTaskBodyValidator,
  initiate
);
router.get('/today', isAuthenticated, getTodaysTask);

module.exports = router;