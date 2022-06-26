class promo_code {
  promo_code(req, res, next) {
    res.render("Promo-Code/list_promo");
  }
}
module.exports = new promo_code();
