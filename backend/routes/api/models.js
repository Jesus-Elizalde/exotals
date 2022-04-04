const express = require("express");

const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await db.Model.findAll();
    res.json({ data });
  })
);

module.exports = router;
