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
//    app.put("/account/:id",queryApi.editAccount);
app.put("/account/:id",queryApi.editAccount);
   app.get("/logout",queryApi.logout);
}
module.exports= api;
