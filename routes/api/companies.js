const express = require("express");
const router = express.Router();
const Company = require('../../models/Company');

router.post('/', (req, res) => {
  if (req.body.name === undefined || req.body.name === null || req.body.name.length === 0) {
     return res.status(400).json({
       InvalidName: "Company name cannot be blank"
     }); 
  }

  const newCompany = new Company({
    name: req.body.name
  });

  newCompany.save().then(company => res.json(company));
});

module.exports = router;