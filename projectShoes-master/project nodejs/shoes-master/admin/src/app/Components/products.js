const productsModels = require("../Models/products");
const { Single, Muti } = require("../../query/mongoose");

class products {
  // products
  listProducts(req, res, next) {
      productsModels
      .aggregate([
        {
          $lookup: {
            from: 'categories',
            localField: 'ObjectId',
            foreignField: 'ObjectId',
            as: 'category'
          }
        },
        {
          $unwind: '$category',
        },
        {
          $addFields: { category: '$category.name' }
        }
      ])
      .then((list) => {
        res.render("products/products", { list: list });
      })
      .catch(next); 
  }
  //searchProducts
 async searchProducts(req,res,next){
 const payload = req.query.search;
     await productsModels.find({
  nameProduct: { $regex: payload }
}).exec()
.then((result) => {
  res.render("products/searchProducts", { result: result });
  console.log(result);
}).catch((err) => {
  res.send(err)
});
  }
  createProduct(req,res,next){
    res.render("products/createProduct");
  }
  editProduct(req, res) {
    productsModels.findById({ _id: req.params.id })
      .then((ItemProduct) => {
        res.render("products/editProduct", { ItemProduct: Single(ItemProduct) });
      }).catch((err) => {
        console.log("Err");
      })
  }
}
module.exports = new products();
