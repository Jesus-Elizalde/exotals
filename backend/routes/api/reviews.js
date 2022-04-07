const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const response = await db.Review.findAll({
      include: { model: db.User },
    });

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

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const { review, rating } = req.body;

    const reviewdb = await db.Review.findByPk(id, {
      include: { model: db.User },
    });

    if (reviewdb) {
      reviewdb.review = review;
      reviewdb.rating = rating;

      reviewdb.save();
      res.json(reviewdb);
    }
  })
);

router.delete(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const review = await db.Review.findByPk(id);

    if (review) {
      await review.destroy();
      res.json(id);
    }
  })
);

module.exports = router;
