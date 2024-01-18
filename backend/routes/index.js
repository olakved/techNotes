const router = require("express").Router();
const userRoutes = require("./userRoute");
const authRoutes = require("./authRoute");

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
