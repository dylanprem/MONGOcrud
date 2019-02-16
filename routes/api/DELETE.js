const express = require("express");
const router = express.Router();

//Item Schema
const Item = require("../../models/Item");

//cors middleware
const cors = require("cors");
router.options("/*", cors());

// @route   GET api/DELETE/test
// @desc    Test route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "DELETE Test Route works" });
});

// @route   GET api/DELETE/:id
// @desc    delete item by id
// @access  Public
router.delete("/:id", cors(), (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(deleted => res.json({ Success: "Item successfully deleted" }))
    .catch(err =>
      res.json({
        ErrorNonExistant: "This item doesn't exist",
        MongoError: err
      })
    );
});

module.exports = router;
