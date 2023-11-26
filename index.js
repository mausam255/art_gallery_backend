const cors = require("cors");
const express = require("express");
const connectToMongo = require("../config/db.js");
const galleryRoutes = require("../routes/gallery.js");
const app = express();

// API Routes
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use("/api/v1", galleryRoutes);

// app.use(express.static("public/upload"));

const PORT = 8000;

connectToMongo();
app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT}`);
});
