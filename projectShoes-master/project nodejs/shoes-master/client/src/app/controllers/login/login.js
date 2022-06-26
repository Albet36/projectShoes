class login {
  login(req, res, next) {
    res.render("login/login", { layout: "main_login.hbs" });
  }
  register(req, res, next) {
    res.render("login/register", { layout: "main_login.hbs" });
  }
}
module.exports = new login();
