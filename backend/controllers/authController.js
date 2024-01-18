const User = require("../model/users");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const handleResponse = require("../utils/response");
const Role = require("../utils/role");
const { v4: uuidv4 } = require("uuid");

const authRegister = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, role, password } = req.body;

  try {
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !role ||
      !password
    ) {
      return handleResponse(res, 400, "All fields are required");
    }

    //   Checking vailability of credentials in the database
    const emailTaken = await User.findOne({ email: email });
    if (emailTaken) {
      return handleResponse(res, 400, "Email already taken");
    }

    const numberTaken = await User.findOne({ phoneNumber: phoneNumber });
    if (numberTaken) {
      return handleResponse(res, 400, "Phone number already taken");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const verificationCode = crypto.randomInt(1000, 9999).toString();

    const newUser = new User({
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      role: Role[role.toLowerCase()],
      password: hashPassword,
      verificationCode: verificationCode,
      dateCreated: Date.now("en-US", { timeZone: "watTimeZone" }),
    });

    const savedUser = await newUser.save();

    if (!savedUser) {
      return handleResponse(res, 500, "Something went wrong", {
        success: false,
      });
    } else {
      return handleResponse(res, 200, "Account created successfully", {
        success: true,
        verificationCode: verificationCode,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const authLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return handleResponse(res, 400, "All fields are required");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return handleResponse(res, 404, "User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return handleResponse(res, 400, "Invalid password");
    }
    return handleResponse(res, 200, "Login successful", {
      success: true,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    return error;
  }
};

module.exports = { authRegister, authLogin };
