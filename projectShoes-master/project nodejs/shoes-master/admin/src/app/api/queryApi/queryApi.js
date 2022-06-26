const Account = require("../../Models/Account");
const category = require("../../Models/category");
const categories = require("../../Models/category");
const products = require("../../Models/products");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    editAccount(req, res, next) {
        const checkAccount = req.params.id;
        if (checkAccount) {
            Account.findByIdAndUpdate(checkAccount, req.body)
            .then(() => res.redirect('/users/profile')).catch((err) => {
                res.send(err)
                console.log(req.params.id);
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
    async createAccount(req, res) {
        try {
            const { username, password, email, images, name, age, address,role } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const checkUsername = await Account.findOne({username: req.body.username});
           if (!checkUsername) {
            Account.create({
                username: username,
                password: hash,
                email: email,
                images: images,
                name: name,
                age: age,
                address: address,
                role : role
            })
                .then(() => res.redirect('/login')).catch((err) => {
                    res.json(err)
                });
           }
           else{
               res.json('tài khoản đã tồn tại');
           }
        } catch (error) {
            res.json(error)
        }

    }

    async checkAccount(req, res) {
        try {
            const user = await Account.findOne({ username: req.body.username });
            if (!user) {
                res.json('sai tài khoản');
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                res.json("sai mật khẩu");
            }
            if (user && validPassword) {
                const maxAge = 1000 * 10;
                const Token = jwt.sign(
                    {
                        _id: user.id,
                        role: user.role
                    },
                    process.env.JWT_ACCESS_KEY,
                    { expiresIn: "300s" }
                );
                res.cookie('userId', Token);
                if(user.role ==='staff'){
                    res.redirect('/home');
                }
                else{
                    res.redirect('http://localhost:2002/home');          }
            }
        } catch (error) {
            res.redirect('/login')
        }
    }
    logout(req, res) {
        res.cookie('userId', '', { maxAge: 1 });
        res.redirect('/login');
    }


}
module.exports = new queryApi();