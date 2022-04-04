const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await db.Car.findAll({
      include: [
        {
          model: db.Image,
        },
        {
          model: db.Seat,
        },
        {
          model: db.Transmisson,
        },
        {
          model: db.Cylinder,
        },
        {
          model: db.Drivetrain,
        },
      ],
    });
    // const response = data.json();

    console.log(data);
    res.json({ data });
  })
);

module.exports = router;
