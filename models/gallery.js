const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const galleryModel = mongoose.model("gallery", gallerySchema);

module.exports = galleryModel;
