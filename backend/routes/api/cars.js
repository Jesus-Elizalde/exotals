const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await db.Car.findAll({
      include: db.Image,
    });
    // const response = data.json();

    console.log(data);
    res.json({ data });
  })
);

module.exports = router;
