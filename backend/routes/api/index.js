const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const carsRouter = require("./cars.js");
const makesRouter = require("./makes");
const modelsRouter = require("./models");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/cars", carsRouter);

router.use("/makes", makesRouter);
router.use("/models", modelsRouter);

module.exports = router;
