const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// Port
const PORT = process.env.PORT || 3006;

// Start server
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode On Port ${PORT}`
      .bgBlue.white
  );
});
