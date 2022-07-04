const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Slide = new Schema(
  {
    images: { type: String },
   description: {type: String}
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Slide", Slide);
