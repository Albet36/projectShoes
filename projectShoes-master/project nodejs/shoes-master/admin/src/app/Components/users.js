const { Muti } = require("../../query/mongoose");
const Account = require("../Models/Account");

class users {
  // users
  profile(req, res, next) {
    res.render("users/profile", { layout: "main-users.hbs" });
  }
listUser(req, res, next) {
Account.find({})
.then((result) => {
  res.render("users/listUser", { layout: "main-users.hbs",result : Muti(result) });
}).catch((next));
  }
}
module.exports = new users();
