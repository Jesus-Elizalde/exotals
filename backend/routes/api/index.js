const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const carsRouter = require("./cars.js");
const makesRouter = require("./makes");
const modelsRouter = require("./models");
const utildataRouter = require("./utilData");
const reviewsRouter = require("./reviews");
const favoritesRouter = require("./favorites");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/cars", carsRouter);

router.use("/makes", makesRouter);

router.use("/models", modelsRouter);

router.use("/utildata", utildataRouter);

router.use("/reviews", reviewsRouter);

router.use("/favorites", favoritesRouter);

module.exports = router;
