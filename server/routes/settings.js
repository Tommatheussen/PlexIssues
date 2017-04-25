const express = require('express');
const router = express.Router();

const Settings = require('../models').Settings;

/* GET api listing. */
router.get('/', (req, res) => {
  Settings.findAll().then(function (settings) {
    return res.json(settings);
  });
});

module.exports = router;