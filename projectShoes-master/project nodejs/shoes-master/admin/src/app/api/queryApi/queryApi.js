const Account = require("../../Models/Account");
const category = require("../../Models/category");
const categories = require("../../Models/category");
const products = require("../../Models/products");
// const initializePassport = require('../../../passport/passport-config');
class queryApi {
    //product manager
    createProducts(req, res, next) {
        const data = req.body;
        const product = new products(data);
        product.save()
            .then(() => res.redirect("/products"))
            .catch(next);
    }
    editProducts(req, res, next) {

        products
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/products')
            }).catch(next);
    }
    deleteProducts(req, res, next) {
        const checkId = req.params.id;
        if (checkId) {
            products.findByIdAndDelete(checkId, req.body)
                .then(() => res.redirect('/products'))
                .catch(next);
        }
        else {
            res.json('failed')
        }
    }
    //category manager
    createCateGory(req, res, next) {
        const data = req.body;
        const category = new categories(data);
        category.save()
            .then(() => res.redirect("/category"))
            .catch((err) => {
                res.send(err)
            });
    }
    editCateGory(req, res, next) {
        const check = req.params.id;
        if (check) {
            category.findByIdAndUpdate(check, req.body)
                .then(() => res.redirect('/category')).catch((err) => {
                    res.send(err)
                });
        }

    }
    deleteCateGory(req, res) {
        const checkDelete = req.params.id;
        if (checkDelete) {
            category.findByIdAndDelete(checkDelete, req.body)
                .then(() => res.redirect('/category'))
                .catch((err) => {
                    res.send(err)
                });
        }
    }
    //Account
    editAccount(req, res, next) {
        const checkAccount = req.params.id;
        if (checkAccount) {
            Account.findByIdAndUpdate(checkAccount, req.body)
                .then(() => res.redirect('/users/profile')).catch((err) => {
                    res.send(err)
                });
        }
    }
    logout(req, res) {
        res.cookie('userId', '', { maxAge: 1 });
        res.redirect('http://localhost:2002/login');
    }
}
module.exports = new queryApi();