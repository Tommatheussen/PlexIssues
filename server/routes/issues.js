const express = require('express');
const router = express.Router();

const Issue = require('../models').Issue;

/* GET api listing. */
router.get('/', (req, res) => {
	let limit = req.query.limit || 10;
	let sort = req.query.sort || 'openDate';
  let order = req.query.order || 'ASC';
  let page = req.query.page || 1;

  let where = {}
  req.query.status ? where.status = req.query.status : null;

  Issue.findAndCount({
    where: where,
    order: [
      [sort, order]
    ],
    limit: limit,
    offset: limit * (page - 1)
  }).then(function (issues) {
    return res.json({
      count: issues.count,
      issues: issues.rows
    });
  });
});

router.get('/latest', (req, res) => {
  Issue.findAll({
    where: {
      status: 'new'
    },
    order: [
      ['openDate', 'DESC']
    ],
    limit: 5
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
    res.status(400).send(error);
  });
});

router.put('/:id', (req, res) => {
  Issue.update(req.body, { where: { id: req.params.id } }).then(function (result) {
    res.status(204).send();
  }, function (error) {
    console.log('Failed to update:', error);
    res.status(400).send(error);
  });
});

module.exports = router;