class cart {
  cart(req, res, next) {
    res.render("cart/cart");
  }
  checkout(req, res, next) {
    res.render("cart/checkout");
  }
}
module.exports = new cart();
