const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords do not match",
      },
    },
  },
  { collection: "UserInfo" }
);

// Strip confirmPassword before saving
UserSchema.pre("save", function (next) {
  this.confirmPassword = undefined;
  next();
});

module.exports = mongoose.model("User", UserSchema);
