const router = require("express").Router();

const controller = require("./controller");

router.post("/", controller.postOne);

module.exports = router;
