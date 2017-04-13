const express = require('express');
const router = express.Router();

const Issue = require('../models').Issue;

const issues = require('./data/issues.js');

/* GET api listing. */
router.get('/', (req, res) => {
	let limit = req.query.limit || 10;
	let sort = req.query.sort || "openDate";
	let status = req.query.status || "new";

	let result = issues.filter(issue => issue.status === status)
		.sort((a, b) => {
			return b["sort"] - a["sort"];
		}).slice(0, limit);

  	res.json(result);
});

router.post('/', (req, res) => {
  let status = req.body.status;

  return Issue.create({
    type: "Lang",
    description: "Desc",
    item: "test",
    status: status
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