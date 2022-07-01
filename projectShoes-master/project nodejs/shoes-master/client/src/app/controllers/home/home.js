const products = require("../../../models/products");
const producer = require("../../../models/producer")
const { Single, Muti } = require("../../../query/mongoose");
class home {
  home(req, res, next) {
    products.find({})
      .then((listProduct) => {
        res.render("home/home", { listProduct: Muti(listProduct) });
      })
      .catch((next));
  }
}
module.exports = new home();
