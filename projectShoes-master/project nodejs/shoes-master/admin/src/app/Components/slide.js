class slide{
listSlide(req,res){
    res.render('slide/slide');
}
createSlide(req,res){
    res.render('slide/createSlide');
}
editSlide(req,res){
    res.render('slide/editSlide');
}
}
module.exports = new slide();