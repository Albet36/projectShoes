const Account = require('../models/Account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class queryApi{
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
                    res.redirect('http://localhost:2001/home');
                }
                else{
                    res.redirect('/home')}
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