const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const carsRouter = require("./cars.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/cars", carsRouter);

module.exports = router;
