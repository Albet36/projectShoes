class sale {
  // sale/Order
  order(req, res, next) {
    res.render("orders/order");
  }
  // order/paid Orders
  Paid_Orders(req, res, next) {
    res.render("orders/Paid_Orders.hbs");
  }

}
module.exports = new sale();
