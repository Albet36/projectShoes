const login = require("../app/Components/login");
const home = require("../app/Components/home");
const products = require("../app/Components/products");
const promo_code = require("../app/Components/promo_code");
const sale = require("../app/Components/sale");
const users = require("../app/Components/users");
const category = require("../app/Components/category");
const notFound = require("../app/Components/notFound");
const middlewareAuth = require("../middleware/Auth");
function routes(app) {

  // home
  app.get("/home",middlewareAuth.requireAuth, home.home);
  // users
  app.get("/users/profile",middlewareAuth.requireAuth, users.profile);
  app.get("/users/listUser",middlewareAuth.requireAuth, users.listUser);
  // product/createproduct
  app.get("/searchProducts",middlewareAuth.requireAuth, products.searchProducts);
  app.get("/products",middlewareAuth.requireAuth, products.listProducts);
  app.get("/products/createProduct",middlewareAuth.requireAuth, products.createProduct);
  app.post("/products/editProduct/:id",middlewareAuth.requireAuth, products.editProduct);


  // category
  app.get("/category",middlewareAuth.requireAuth, category.category);
  // category/createCategory
  app.get("/category/createCategory",middlewareAuth.requireAuth, category.createCategory);
  // category/editcategory
  app.get("/category/editCategory/:id",middlewareAuth.requireAuth, category.editCategory);
  // order
  app.get("/order",middlewareAuth.requireAuth, sale.order);
  // Paid_Orders
  app.get("/orders/Paid_Orders",middlewareAuth.requireAuth, sale.Paid_Orders);
  // Date Amendirment
  // error pages
  app.get("/404", notFound.notFound);
  // login
  app.get("/login", login.login);
  app.get("/register", login.register);
}
module.exports = routes;
