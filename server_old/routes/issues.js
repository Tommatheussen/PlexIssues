const express = require('express');
const router = express.Router();

const database = require('../database');
const uuid = require('uuid/v4');

/*
router.put('/:id', (req, res) => {
  Issue.update(req.body, { where: { id: req.params.id } }).then(
    function(result) {
      res.status(204).send();
    },
    function(error) {
      console.log('Failed to update:', error);
      res.status(400).send(error);
    }
  );
});*/

module.exports = router;
