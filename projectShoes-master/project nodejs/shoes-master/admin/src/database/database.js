 const mongoose = require("mongoose");
 require("dotenv").config();
 function connect() {  
     try {   
  mongoose.connect(process.env.DB_URL);  
          console.log("Bạn đã kết nối tới Nasa");
  } 
  catch (err) {
    console.log("Kết nối thất bại");
  }
} 
module.exports = { connect };
