var passport = require('passport');
var localStrategy = require('passport-local').Strategy ;
var Model = require('./orm');
var User = Model.User ;

//serialize user 
passport.serializeUser(function(user,done){
    done(null,user);
});

passport.deserializeUser(function(user,done){
    User.find({where : {login : user.login,
        password : user.password
} }).then(function(user){
    done(null,user);
}).error(function(err){
    done(null,err);
});
});

passport.use('login',new localStrategy(function(username,password,done){
   User.find({where : {login : user.login,
        password : user.password
} }).then(function(user){
    if(user){
        done(null,user);
    }
    done(null,false);
});
}))