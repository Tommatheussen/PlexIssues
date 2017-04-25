const express = require('express');
const router = express.Router();

const Settings = require('../models').Settings;

/* GET api listing. */
router.get('/', (req, res) => {
  Settings.findAll().then(function (settings) {
    var result = {};
    settings.map(function (setting) {
      console.log(setting);
      result[setting.name] = setting.value;
    });
    return res.json(result);
  });
});

module.exports = router;