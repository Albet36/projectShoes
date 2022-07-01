const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Account = new Schema(
  {
    username: { type: String },
    password: { type: String },
    email : { type : String },
    images: { type: String },
    name: { type: String },
    age: { type: String },
    address: { type: String },
    role : {type: String}
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Account", Account);
