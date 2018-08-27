const express = require("express");
const router = express.Router();

const Industry = require('../../models/Industry');

router.post('/', (req, res) => {
  if (req.body.name === undefined || req.body.name === null || req.body.name.length === 0) {
    return res.status(400).json({InvalidName: "Invalid Industry Name!"});
  }

  const newIndustry = new Industry({
    name: req.body.name
  });

  newIndustry.save().then(industry => res.json(industry));
});

module.exports = router;