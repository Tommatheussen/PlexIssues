const express = require('express');
const router = express.Router();

const Issue = require('../models').Issue;

const issues = require('./data/issues.js');

/* GET api listing. */
router.get('/', (req, res) => {
	let limit = req.query.limit || 10;
	let sort = req.query.sort || "openDate";
	let status = req.query.status || "new";

  Issue.findAll().then(function (issues) {
    return res.json(issues);
  });
});

router.post('/', (req, res) => {
  let status = req.body.status;

  return Issue.create({
    type: "Lang",
    description: "Desc",
    item: "test"
  }).then(function (data) {
    res.send(data);
  }, function (error) {
    console.log("Failed:", error);
    res.send();
  });


  /*db.run("INSERT INTO Issue(type, item, description) VALUES($type, $item, $description)", {
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