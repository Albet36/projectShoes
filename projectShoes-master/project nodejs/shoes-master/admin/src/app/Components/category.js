const { Muti, Single } = require("../../query/mongoose");
const categorys = require("../Models/category");
class category {
  // category
  category(req, res, next) {
    categorys.find({})
      .then((result) => {
        res.render("category/category", { result: Muti(result) });
      }).catch(next);
  }
  // category/create
  createCategory(req, res, next) {
    res.render("category/createCategory");
  }
  // category/edit
  editCategory(req, res, next) {
    categorys.findById({ _id: req.params.id })
      .then((resultCategory) => {
        res.render("category/editCategory", { resultCategory: Single(resultCategory) });
      }).catch((err) => {
        res.send(err)
      });
  }
}
module.exports = new category();
