const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongodb = require("./library/mongodb");
const v1 = require("./routes/v1");
const helmet = require("helmet");

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: ['https://agarissitsolution.in', 'http://localhost:3000'], // allow frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(helmet());

// Handle large uploads (fixes 413 Request Entity Too Large)
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// Serve uploads folder statically
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/v1", v1);

// Connect to DB and start server
mongodb();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
