const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

//cors middleware
const cors = require("cors");

// @route   GET api/POST/test
// @desc    Test route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "POST Test Route works" });
});


// @route   POST api/POST
// @desc    Post an item to items db
// @access   Public
router.post("/", (req, res) => {
  const newItem = {
    item: req.body.item
  };
  new Item(newItem)
    .save()
    .then(itm => res.json(itm))
    .catch(err => res.json(err));

})

//options
router.options("/*", cors());

module.exports = router;