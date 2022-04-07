const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const response = await db.Review.findAll();

    res.json(response);
  })
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const formData = req.body;

    const data = await db.Review.build(formData);

    if (data) {
      await data.save();
      res.json(data);
    }
  })
);

module.exports = router;
