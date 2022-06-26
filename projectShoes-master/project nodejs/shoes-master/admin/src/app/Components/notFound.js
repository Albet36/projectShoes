class notFound {
  notFound(req, res, next) {
    res.render("errorPages/404",  { layout: "main_notFound.hbs" });
  }
}
module.exports = new notFound();
