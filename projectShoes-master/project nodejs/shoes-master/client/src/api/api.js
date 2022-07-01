const queryApi = require('../api/queryApi');
function api(app) {
    app.post("/account",queryApi.createAccount);
//  app.put("/account/:id",queryApi.editAccount);
app.post("/checkAcc",queryApi.checkAccount);
app.get("/logout",queryApi.logout);
}
module.exports = api;