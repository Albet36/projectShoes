const queryApi = require("./queryApi/queryApi");
function api(app) {
    //Api Product
    app.post("/products",queryApi.createProducts);
    app.put("/products/:id",queryApi.editProducts);
    app.delete("/products/:id",queryApi.deleteProducts);
   //Api Category
   app.post("/category",queryApi.createCateGory);
   app.put("/category/:id",queryApi.editCateGory);
   app.delete("/category/:id",queryApi.deleteCateGory);
   //Api Login & Register
   app.post("/account/",queryApi.createAccount);
   app.put("/account/:id",queryApi.editAccount);
   app.post("/checkAcc",queryApi.checkAccount);
   app.get("/logout",queryApi.logout);
}
module.exports= api;
// api sẽ 4 method cơ bản là : GET (lấy dữ liệu) ,Post(Gửi dữ liệu),PUT/id(Sửa đổi dữ liệu),DELETE/id
// back-end : HTML,css->(responsive media),javascript
