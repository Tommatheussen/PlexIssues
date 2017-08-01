const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.use('/issue', require('./issues'));
router.use('/plex', require('./plex'));
router.use('/settings', require('./settings'));

module.exports = router;