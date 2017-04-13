const express = require('express');
const router = express.Router();

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
	res.ok();
});

router.put('/', (req, res) => {
	res.ok();
});

module.exports = router;