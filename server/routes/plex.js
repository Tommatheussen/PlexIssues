const express = require('express');
const router = express.Router();

const plexAPI = require('plex-api');

var client = new PlexAPI(require('./config'));



plex.query("/library/metadata/44369").then(function (response) {
  console.log(response.MediaContainer.Metadata);
  /*directories.MediaContainer.Directory.forEach(function(dir) {
    console.log(dir);
  }, this);*/
	// directories would be an array of Directory items
}, function (err) {
  console.log(err);
	//throw new Error("Could not connect to server");
});





/* GET api listing. */
router.get('/issue', (req, res) => {
	let limit = req.query.limit || 10;
	let sort = req.query.sort || "openDate";
	let status = req.query.status || "new";

	let result = issues.filter(issue => issue.status === status)
		.sort((a, b) => {
			return b["sort"] - a["sort"];
		}).slice(0, limit);

  	res.json(result);
});

router.post('issue', (req, res) => {
	res.ok();
});

router.put('issue', (req, res) => {
	res.ok();
});

module.exports = router;