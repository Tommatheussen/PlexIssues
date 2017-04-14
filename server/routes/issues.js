const express = require('express');
const router = express.Router();

const Issue = require('../models').Issue;

const issues = require('./data/issues.js');

/* GET api listing. */
router.get('/', (req, res) => {
	let limit = req.query.limit || 10;
	let sort = req.query.sort || 'openDate';
  let status = req.query.status || 'new';
  let order = req.query.order || 'ASC';

  Issue.findAll({
    where: {
      status: status
    },
    order: [
      [sort, order]
    ],
    limit: limit
  }).then(function (issues) {
    return res.json(issues);
  });
});

router.post('/', (req, res) => {
  let type = req.body.type;
  let description = req.body.description;
  let item = req.body.item;
  
  return Issue.create({
    type: type,
    description: description,
    item: item
  }).then(function (data) {
    res.send(data);
  }, function (error) {
    console.log('Failed:', error);
    res.send();
  });


  /*db.run('INSERT INTO Issue(type, item, description) VALUES($type, $item, $description)', {
    $type: 'Language',
    $item: 'Zambezia',
    $description: 'This movie is in Russian?'
  }).then(function (promise) {
    console.log(promise);
    return promise;
  });*/
	//res.send();
});

router.put('/', (req, res) => {
	res.ok();
});

module.exports = router;