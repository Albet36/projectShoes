const products = require("../../../models/products");
const producer = require("../../../models/producer")
const { Single, Muti } = require("../../../query/mongoose");
class home {
  home(req, res, next) {
    products.aggregate([
      {
      
        $facet: {
          "listOfName": [
            {
              $project: {
                nameProduct: "$nameProduct",
                priceProduct: "$priceProduct"
              }
            },
          ],
          "listOfName2": [
            {
              $project: {
                nameProduct: "$nameProduct",
                priceSale: { $gt: ["$priceSale", 1] },
              }
            },
          ]
        }
      },
      
    ])
      .then((listProduct) => {
        res.render("home/home", { listProduct: listProduct });
        res.json(listProduct)
      })
      .catch((next));

  }
}
module.exports = new home();
