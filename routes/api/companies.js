const express = require("express");
const router = express.Router();
const Company = require('../../models/Company');
const mongoose = require('mongoose');

router.post('/', (req, res) => {
  if (req.body.name === undefined || req.body.name === null || req.body.name.length === 0) {
     return res.status(400).json({
       InvalidName: "Company name can't be blank"
     }); 
  }

  const newCompany = new Company({
    name: req.body.name,
    industry: req.body.industry
  });

  newCompany.save().then(company => res.json(company));
});

router.get('/', (req, res) => {
  Company.find((error, companies) => {
    if (error) return res.status(404).json({ NoCompanies: "Failed to get Companies." });

    res.json(companies.map(company => company.name));
  });
});

module.exports = router;