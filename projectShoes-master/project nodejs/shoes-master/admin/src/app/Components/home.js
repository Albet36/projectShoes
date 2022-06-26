const { Muti } = require("../../query/mongoose");
const products = require("../Models/products");

class home {
  // users
  home(req, res, next) {
    products.find({})
    .then((result) => {
      res.render("home/home",{result : Muti(result)});
    }).catch((err) => {
      
    });
  }
}
module.exports = new home();
