import cors from "cors";
import express from "express";
import connectToMongo from "../config/db.js";
import galleryRoutes from "../routes/gallery.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file serving
app.use(express.static("public/upload"));

// API Routes
app.use("/api/v1", galleryRoutes);

// Default route
app.use("/", (req, res) => {
    res.send("Backend is running");
});

// Redirect all other API requests
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "Not a valid API request" });
});

app.get('/favicon.ico', (req, res) => res.status(204))

const PORT = process.env.PORT || 8000;

// Connect to MongoDB and start the server
connectToMongo()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`API is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
