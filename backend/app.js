const express = require("express");
const dotenv = require("dotenv");
const createDateBase = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, async () => {
  await createDateBase();
  console.log(`App is running: http://localhost:${PORT}`);
});
