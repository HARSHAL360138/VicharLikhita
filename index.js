const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/formRoutes");
const testRoutes = require("./routes/testRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api", formRoutes);
app.use("/api/test-details", testRoutes);
app.use("/api", applicationRoutes);
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Form API</h1>");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
