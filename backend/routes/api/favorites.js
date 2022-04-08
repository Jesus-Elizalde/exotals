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

    const data = await db.Favorite.findByPk(id);

    if (data) {
      await data.destroy();
      res.json(id);
    }
  })
);

module.exports = router;
