module.exports = function(io){

var express= require('express');
var router = express.Router() ;
router.get('/',function(req,res,next){
  if (req.isAuthenticated()){
    res.render('index.html');
  }else {
    res.redirect('/auth');
  }
  
});
router.get('/home',isAuthenticated,function(req,res,next){
      console.log('home');
});
router.get("/idea/:id",function(req,res,next){
  if (req.isAuthenticated()){
    res.render('index.html');
  }else {
    res.redirect('/auth');
  }
  
})
router.get('/logout',function(req,res,next){
  //res.logOut();
  req.session.destroy();
  res.json({success : true}) ;
})
function isAuthenticated(req,res,next){
  if (req.isAuthenticated()){
    res.redirect('/');
  }
  res.redirect('/auth');
}
function DestroySession(req,res,next){
  res.logOut();
  req.session.destroy();
  res.redirect('/');
}
return router ;
}