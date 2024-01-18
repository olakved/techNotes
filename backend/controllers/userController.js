const User = require("../model/users");
const handleResponse = require("../utils/response");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  return handleResponse(res, 200, "All users", { success: true, users: users });
};

module.exports = {
  getAllUsers,
};
