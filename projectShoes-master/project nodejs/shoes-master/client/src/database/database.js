require("dotenv").config();
const mongoose = require("mongoose");
function Connect() {  
    try {   
         mongoose.connect(process.env.CONNECT_MONGO_URI);  
         console.log("Bạn đã kết nối tới Nasa");
 } 
 catch (err) {
   console.log("Kết nối thất bại");
 }
} 
module.exports = { Connect };
