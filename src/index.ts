import express from "express";
import emailRoutes from "./routes/email";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.use("/api/email", emailRoutes);

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Email API!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
