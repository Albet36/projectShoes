class login {
  login(req, res, next) {
    res.render("login/signin", { layout: "main_login.hbs" });
  }
  register(req, res, next) {
    res.render("login/register", { layout: "main_login.hbs" });
  }
}
module.exports = new login();
