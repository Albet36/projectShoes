const cart = require("../app/controllers/cart/cart");
const home = require("../app/controllers/home/home");
const login = require("../app/controllers/login/login");
const products = require("../app/controllers/products/products");
const middlewareAuth = require("../middleware/Auth");
function routes(app) {
  app.get("/home", home.home);
  app.get("/cart", cart.cart);
  app.get("/cart/checkout", cart.checkout);
  app.get("/listProducts", products.listProduct);
  app.get("/searchProduct", products.searchProduct);
  app.get("/products/ProductDetails/:id", products.productDetails);
  app.get("/login", login.login);
  app.get("/register", login.register);
}
module.exports = routes;
