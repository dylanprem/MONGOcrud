const express = require("express");
const router = express.Router();

//Item Schema
const Item = require("../../models/Item");

// Load Input Validation
const validateInput = require("../../validation/validation");

//cors middleware
const cors = require("cors");
router.options("/*", cors());

// @route   GET api/PATCH/test
// @desc    Test route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "PATCH Test Route works" });
});

// @route   GET api/PATCH/:id
// @desc    Test route
// @access  Public
router.patch("/:id", cors(), (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const updatedItem = {
    item: req.body.item
  };
  Item.findByIdAndUpdate(req.params.id, updatedItem)
    .then(patched => res.json({ Success: "Item successfully patched" }))
    .catch(err =>
      res.json({
        ErrorNonExistant: "This item doesn't exist",
        MongoError: err
      })
    );
});

//options
router.options("/*", cors());

module.exports = router;
