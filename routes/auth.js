var express= require('express');
var router = express.Router() ;
var passport = require('passport');
var localStrategy = require('passport-local').Strategy ;
var Model = require('../orm');
var User = Model.User ;
var Etudiant = Model.Etudiant;
var Enseignant =  Model.Enseignant ;
var Entreprise = Model.Entreprise ;
var bcrypt = require('bcrypt-nodejs');
var mail = require('../exemplemail');
//serialize user 
passport.serializeUser(function(user,done){
    done(null,user);
});

passport.deserializeUser(function(user,done){
        done(null, user)
});

passport.use('login',new localStrategy({
  passReqToCallback : true
},function(req,username,password,done){
    
      User.find({where : {login : username
} }).then(function(user){
   
    if(user){
        bcrypt.compare(password,user.password,function(err,res){
            if (res){
                done(null,user);
            }else {
                done({error: 'not exist'} ,false);
            }
        })
        
    }else {
        done({error: 'not exist'} ,false);

    }
   
})
}));
router.get('/currentUser',function(req,res,next){
    if(req.isAuthenticated()){
       var datauser = {login:{},as:{},data:{}};
    Etudiant.find({where : {userfk: req.session.passport.user.login}}).then(function(etudiant){
        if(etudiant){
            datauser.login = req.session.passport.user.login ;
            datauser.as = 'student',
            datauser.data = etudiant ;
            res.json(datauser) ;
        }
    }) ;  
    Enseignant.find({where : {userfk: req.session.passport.user.login}}).then(function(enseignant){
        if(enseignant){
            datauser.login = req.session.passport.user.login ;
            datauser.as = 'enseignant',
            datauser.data = enseignant ;
            res.json(datauser) ;
        }
    }) ;  
    }else {
        console.log("not identifiedd");
    }
})
router.get('/',function(req,res,next){
    if (req.isAuthenticated()){
        res.redirect('/');
    }
  res.render('index.html');
});
router.post('/',passport.authenticate('login'), function (req, res) {
    console.log(req.body);
    console.log(req.session)
    var data = {success :{},userdata:{}} ;
    if(req.isAuthenticated()){
        data.success = true ;
        var datauser = {login:{},as:{},data:{}};
    Etudiant.find({where : {userfk: req.session.passport.user.login}}).then(function(etudiant){
        if(etudiant){
            datauser.login = req.session.passport.user.login ;
            datauser.as = 'student',
            datauser.data = etudiant ;
            data.userdata = datauser ;
            res.json(data) ;
        }
    }) ; 
    Enseignant.find({where : {userfk: req.session.passport.user.login}}).then(function(etudiant){
        if(etudiant){
            datauser.login = req.session.passport.user.login ;
            datauser.as = 'enseignant',
            datauser.data = etudiant ;
            data.userdata = datauser ;
            res.json(data) ;
        }
    }) ; 
        
    }else {
        res.json({success : false});
    }
});
router.post('/Register',function(req,res,next){
    var body = req.body ;
    console.log(req.body);
    User.find({where : { email : req.body.registeremail}}).then(function(user){
        if (user){
            var data = {success : false} ;
            res.json(data);
        }else {
            var email = req.body.registeremail ;
            bcrypt.hash(req.body.passwordregister,null,null,function(err,result){
                if (req.body.as == 'student'){
                    User.create({
                        login : req.body.registeremail,
                        password : result,
                        email : email
                    }) ;
                    User.sync().then(function(){
                        Etudiant.create({
                            nom : req.body.firstname,
                            prenom : req.body.lastname,
                            userfk : email
                        }).then(function(etudiant){
                            var data = {success : true,userdata : etudiant} ;
                            mail.sendMail(req.body.registeremail);
                            res.json(data);
                        });

                    });
                }else if (req.body.as == 'enseignant') {
                    User.create({
                        login : req.body.registeremail,
                        password : result,
                        email : email
                    }) ;
                    User.sync().then(function(){
                        Enseignant.create({
                            nom : req.body.firstname,
                            prenom : req.body.lastname,
                            userfk : email
                        }).then(function(ens){
                            var data = {success : true,userdata:ens} ;
                            mail.sendMail(req.body.registeremail);
                            res.json(data);
                        });

                    });    
                }
            })    
        }
    });
     

});

module.exports = router ;