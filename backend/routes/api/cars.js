const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const { restoreUser } = require("../../utils/auth");
const router = express.Router();

const getCoords = require("../../utils/geocoder");

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
          model: db.User,
        },
        {
          model: db.Model,
          include: db.Make,
          order: [[("createdAt", "DESC")]],
        },
      ],
    });
    // const response = data.json();

    res.json({ data });
  })
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const formData = req.body;
    const newObj = Object.assign({}, req.body);
    const coordss = await getCoords(
      `${formData.address} ${formData.city} ${formData.state} ${formData.country}`
    );
    newObj.lat = coordss.lat;
    newObj.lng = coordss.lng;
    const data = await db.Car.build(newObj);
    if (data) {
      await data.save();

      const imgArr = formData.imageArr;

      const imgData = [];
      if (imgArr.length) {
        for (const imgObj of imgArr) {
          if (imgObj.url.length) {
            const newUrl = await db.Image.create({
              url: imgObj.url,
              carId: data.id,
            });
            if (newUrl) {
              imgData.push(newUrl);
            }
          }
        }
      }
      res.json({ data });
    }
  })
);
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const imgArr = req.body.imageArr;
    const deletedArr = req.body.deletedImageArr;

    if (deletedArr.length) {
      for (const delObj of deletedArr) {
        if (delObj.id) {
          const destoryData = await db.Image.findByPk(delObj.id);
          if (destoryData) await destoryData.destroy();
        }
      }
    }

    if (imgArr.length) {
      for (const imgObj of imgArr) {
        if (!imgObj.id) {
          if (imgObj.url) {
            const newImg = await db.Image.build({
              url: imgObj.url,
              carId: id,
            });
            if (newImg) {
              await newImg.save();
            }
          }
        } else {
          if (imgObj.url.length) {
            const editImg = await db.Image.findByPk(imgObj.id);
            if (editImg) {
              editImg.url = imgObj.url;
              await editImg.save();
            }
          }
        }
      }
    }

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
          order: [[("createdAt", "DESC")]],
        },
      ],
    });

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

    const coordss = await getCoords(`${address} ${city} ${state} ${country}`);

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
      (car.lat = coordss.lat), (car.lng = coordss.lng);

      await car.save();

      res.json({ data: car });
    }
  })
);

router.delete(
  "/:id/delete",
  restoreUser,
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const fav = await db.Favorite.findAll({
      where: {
        carId: id,
      },
    });

    for (const ele of fav) {
      await ele.destroy();
    }

    const data = await db.Car.findByPk(id);

    if (data) {
      await data.destroy({ options: { cascade: true } });
      res.json({ data: id });
    }
  })
);

module.exports = router;
