const { authRegister, authLogin } = require("../controllers/authController");
const router = require("express").Router();

router.post("/register", async (req, res) => {
  await authRegister(req, res);
});

router.post("/login", async (req, res) => {
  await authLogin(req, res);
});

module.exports = router;
