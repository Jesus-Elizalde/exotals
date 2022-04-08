const express = require("express");

const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await db.Favorite.findAll();
    res.json(data);
  })
);

router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const data = await db.Favorite.build(req.body);

    if (data) {
      await data.save();
      res.json(data);
    }
  })
);

router.delete(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const data = await db.Favorite.findAll({
      where: {
        userId: req.body.userId,
        carId: req.body.carId,
      },
    });

    if (data) {
      data.forEach(async (ele) => await ele.destroy());

      res.json(id);
    }
  })
);

module.exports = router;
