const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const routes = require("./routes/routes");
const app = express();
const db = require("./database/database")
const PORT = process.env.PORT || 2002;
app.use(express.urlencoded({ extended: true }));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "Resources\\views"));
app.use("*/css", express.static(path.join(__dirname, "public/css")));
app.use("*/js", express.static(path.join(__dirname, "public/js")));
app.use("*/img", express.static(path.join(__dirname, "public/img")));
app.use("*/fonts", express.static(path.join(__dirname, "public/fonts")));
routes(app);
db.Connect();
app.listen(PORT, () => console.log(`localhost:${PORT}`));
