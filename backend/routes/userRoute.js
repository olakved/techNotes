const { getAllUsers } = require("../controllers/userController");
const router = require("express").Router();

router.get("/getAllUsers", async (req, res) => {
  await getAllUsers(req, res);
});

module.exports = router;
