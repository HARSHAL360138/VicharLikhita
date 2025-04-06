const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.json({ error: "User already exists" });

    await User.create({ fname, lname, email, password: encryptedPassword, confirmPassword: encryptedPassword });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
};










exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ status: "error", error: "Invalid password" });
    }

    // ✅ Token with 1 hour expiry
    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // <-- Here it is
    );

    return res.status(201).json({ status: "ok", data: token });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
};


// exports.login = async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const user = await User.findOne({ email });
//       if (!user) return res.json({ error: "User not found" });
  
//       const isPasswordValid = await bcrypt.compare(password, user.password);
//       if (!isPasswordValid) {
//         return res.json({ status: "error", error: "Invalid password" });
//       }
  
//       // ✅ THIS is the correct place to put your line
//       const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
  
//       return res.status(201).json({ status: "ok", data: token });
//     } catch (error) {
//       res.send({ status: "error", error: error.message });
//     }
//   };
  
  exports.getUserData = async (req, res) => {
    const { token } = req.body;
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ email: decoded.email });
  
      if (!user) return res.send({ status: "error", error: "User not found" });
  
      res.send({ status: "ok", data: user });
    } catch (error) {
      res.send({ status: "error", error: "Invalid token" });
    }
  };
  

exports.logout = async (req, res) => {
    // Just tell frontend to delete token
    return res.send({ status: "ok", message: "Logged out successfully" });
  };
  



