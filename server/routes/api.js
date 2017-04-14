const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.use('/issue', require('./issues'));
router.use('/plex', require('./plex'));

module.exports = router;