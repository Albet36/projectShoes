require("dotenv").config();
const mongoose = require("mongoose");
function Connect() {  
    try {   
         mongoose.connect("mongodb://localhost:27017/ecomerce");  
         console.log("Bạn đã kết nối tới Nasa");
 } 
 catch (err) {
   console.log("Kết nối thất bại");
 }
} 
module.exports = { Connect };
