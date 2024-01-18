const { Schema, model } = require("mongoose");
const { reset } = require("nodemon");

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "no image",
    },
    dateCreated: {
      type: String,
    },
    dateUpdated: {
      type: String,
    },
    lastLoginDate: {
      type: String,
    },
    accountStatus: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    resetPassword: {
      type: String,
    },
    verificationCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
