
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const dotenv = require('dotenv');
const port = process.env.PORT || 2001;
const { engine } = require("express-handlebars");
const routes = require("./routes/routes");
const db = require("./database/database.js");
const api = require("./app/api/api");
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const { checkUser }= require('./middleware/Auth');
const passport = require('passport');
const session = require('express-session');

dotenv.config();
// cookie
app.use(cookieParser());
// env
// view engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
// Config method + req
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// config passport
app.use(session({
    secret : process.env.JWT_ACCESS_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(session());

// Config scoure
app.set("views", path.join(__dirname, "Resources\\views"));
app.use("*/css", express.static(path.join(__dirname, "public/css")));
app.use("*/js", express.static(path.join(__dirname, "public/js")));
app.use("*/img", express.static(path.join(__dirname, "public/img")));
app.use("*/lib", express.static(path.join(__dirname, "public/lib")));
// Config routes
db.connect();
app.get('*',checkUser);
routes(app);
// api
api(app);
app.use((req,res,next) => {
    res.status(404).redirect('/404')
});
app.listen(port, () => console.log(`${process.env.HOST}:${process.env.PORT}`));
