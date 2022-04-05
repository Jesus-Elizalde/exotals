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
        {
          model: db.Model,
          include: db.Make,
        },
      ],
    });
    // const response = data.json();

    res.json({ data });
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const car = await db.Car.findByPk(id, {
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
        {
          model: db.Model,
          include: db.Make,
        },
      ],
    });
    console.log(req.body);
    const {
      address,
      city,
      state,
      country,
      price,
      color,
      description,
      modelId,
      transmissonId,
      cylinderId,
      seatId,
      drivetrainId,
    } = req.body;

    if (car) {
      car.address = address;
      car.city = city;
      car.state = state;
      car.country = country;
      car.price = price;
      car.color = color;
      car.description = description;
      car.modelId = modelId;
      car.transmissonId = transmissonId;
      car.cylinderId = cylinderId;
      car.seatId = seatId;
      car.drivetrainId = drivetrainId;

      await car.save();
      console.log(car);
      res.json({ data: car });
    }
  })
);

router.delete(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const data = await db.Car.findByPk(id);

    if (data) {
      await data.destroy();
      res.json({ data: id });
    }
  })
);

module.exports = router;
