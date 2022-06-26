const product = require('../../../models/products');
const { Muti, Single } = require('../../../query/mongoose');
class products {
  listProduct(req, res, next) {
    product.find({})
    .then((listProduct) => {
      res.render("products/listProducts", {listProduct: Muti(listProduct)});
    }).catch((next));
  }
  productDetails(req, res, next) {
    product.findById(req.params.id)
    .then((result) => {
      res.render("products/productDetails", {result : Single(result)});   
    }).catch((next));
  }
  searchProduct(req,res,next){
    
  }
}
module.exports = new products();
