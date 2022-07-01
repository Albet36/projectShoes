const cart = require("../app/controllers/cart/cart");
const home = require("../app/controllers/home/home");
const login = require("../app/controllers/login/login");
const products = require("../app/controllers/products/products");
const middlewareAuth = require("../middleware/Auth");
function routes(app) {
  app.get("/home", middlewareAuth.requireAuth, home.home);
  app.get("/cart", middlewareAuth.requireAuth, cart.cart);
  app.get("/cart/checkout", middlewareAuth.requireAuth, cart.checkout);
  app.get("/listProducts", middlewareAuth.requireAuth, products.listProduct);
  app.get("/searchProduct", middlewareAuth.requireAuth, products.searchProduct);
  app.get("/products/ProductDetails/:id", middlewareAuth.requireAuth, products.productDetails);
  app.get("/login", login.login);
  app.get("/register", login.register);
}
module.exports = routes;
