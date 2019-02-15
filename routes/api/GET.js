const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

//cors middleware
const cors = require("cors");
router.options("/*", cors());

// @route   GET api/GET/test
// @desc    Test route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "GET Test Route works" });
});

// @route   GET api/GET/
// @desc    get all items
// @access  Public
router.get("/", cors(), (req, res) => {
  const errors = {};
  Item.find()
    .populate("itm")
    .then(itms => {
      if (!itms) {
        errors.noitems = "There are no items";
        return res.status(404).json(errors);
      }
      res.json(itms);
    })
    .catch(err => res.json({ MongoError: err }));
});

// @route   GET api/GET/:id
// @desc    get all items
// @access  Public
router.get("/:id", cors(), (req, res) => {
  const errors = {};
  Item.findById(req.params.id)
    .then(itm => {
      if (!itm) {
        errors.noitem = "This item doesn't exist";
        return res.status(404).json(errors);
      }
      res.json(itm);
    })
    .catch(err => res.json({ MongoError: err }));
});

//options
router.options("/*", cors());

module.exports = router;
