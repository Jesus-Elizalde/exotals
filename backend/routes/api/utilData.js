const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const cylinders = await db.Make.findAll();
    const transmissons = await db.Transmisson.findAll();
    const seats = await db.Seat.findAll();
    const drivetrains = await db.Drivetrain.findAll();
    res.json({
      data: {
        cylinders,
        transmissons,
        seats,
        drivetrains,
      },
    });
  })
);

module.exports = router;
