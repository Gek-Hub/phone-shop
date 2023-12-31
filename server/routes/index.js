const Router = require("express");
const router = new Router();
const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const basketRouter = require("./basketRouter");

router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/type", typeRouter);
router.use("/basket", basketRouter);
// создаем пути на сервере

//
module.exports = router;
