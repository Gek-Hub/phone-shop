const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/put", authMiddleware, BasketController.put);
router.post("/delete", authMiddleware, BasketController.deleteOne);
router.get("/", authMiddleware, BasketController.getAll);
module.exports = router;
