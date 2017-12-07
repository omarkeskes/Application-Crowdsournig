var express = require('express');
var path = require ('path') ;
var bodyParser = require('body-parser');
var auth = require('./routes/auth');
var index = require('./routes/index');
var api = require('./routes/api');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var port = 3000;
var app      = express();
//var server   = require('http').createServer(app);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret : "pfapfa",
  resave : true ,
  saveUninitialized : true 
}));
var server = app.listen(port,function(){
  console.log("started");
});
var io = require('socket.io').listen(server);
  
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/',index(io));
app.use('/auth',auth);
app.use('/ideas',index(io));
app.use('/idea',index(io));
app.use('/new',index(io));
app.use('/historique',index(io));
app.use('/etudiant/:id',index(io));
app.use('/profil/:id',index(io));
app.use('/mon_profil/:id',index(io));
app.use('/enseignant/:id',index(io));
app.use('/entreprises',index(io));
app.use('/etudiants',index(io));
app.use('/enseignants',index(io));
app.use('/api',api(io));

