const express = require("express");
const router = express.Router();

//Item Schema
const Item = require("../../models/Item");

// Load Input Validation
const validateInput = require("../../validation/validation");

//cors middleware
const cors = require("cors");
router.options("/*", cors());

// @route   GET api/POST/test
// @desc    Test route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "POST Test Route works" });
});

// @route   POST api/POST
// @desc    Post an item to items db
// @access   Public
router.post("/", cors(), (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newItem = {
    item: req.body.item
  };
  new Item(newItem)
    .save()
    .then(itm => res.json(itm))
    .catch(err => res.json(err));
});

module.exports = router;
