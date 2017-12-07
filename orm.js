var Sequelize = require("sequelize");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('databaseuser.properties');
var user = properties.get('user');
var password = properties.get('password');
var sequelize = new Sequelize('CROWDSOURCING',user,password);
// Models
var Etudiant = sequelize.define('etudiant',{
    nom : {
        type : Sequelize.STRING
    },
    prenom : {
        type : Sequelize.STRING
    },
     tel : {
        type : Sequelize.STRING
    },
    date_naissance : {
        type: Sequelize.DATE
    },
    adresse : {
        type: Sequelize.STRING
    },
    classe : {
        type: Sequelize.STRING
    },
    description : {
        type :Sequelize.TEXT
    },
    note: {
        type : Sequelize.FLOAT
    },
    photo : {
        type : Sequelize.STRING
    } 
    
});
var Enseignant = sequelize.define("enseignant", {
    nom : {
        type : Sequelize.STRING
    },
    prenom : {
        type : Sequelize.STRING
    }, 
    photo : {
        type : Sequelize.STRING
    },
    profession :{
        type : Sequelize.STRING
    },
    description : {
        type : Sequelize.TEXT
    },
    jury:{
        type : Sequelize.BOOLEAN
    }
});
var Entreprise = sequelize.define('entreprise',{
    nom : {
        type: Sequelize.STRING
    },
    description : {
        type : Sequelize.TEXT
    }, 
        adresse : {
        type: Sequelize.STRING
    },
    
    in : {
        type : Sequelize.STRING
    },
        photo : {
        type : Sequelize.STRING
    },
     facebook : {
        type: Sequelize.STRING
    },
    site : {
        type: Sequelize.STRING
    },
    note : {
        type : Sequelize.FLOAT
    }
});

var User = sequelize.define('user',{
    login :{
        type: Sequelize.STRING , 
        primaryKey : true
    }, 
    password :{
        type : Sequelize.STRING ,
        primaryKey : true
    },
    email : {
        type : Sequelize.STRING
    }
});


var Competence  = sequelize.define('competence',{
    id_comp : {
        type: Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement: true,
    }, 
    domaine : {
        type : Sequelize.STRING
    },
    niveau : {
        type: Sequelize.INTEGER
    }
});

var Diplome  = sequelize.define('diplome',{
    id_dip : {
        type: Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement: true,
    }, 
    nom : {
        type : Sequelize.STRING
    },
    annee : {
        type: Sequelize.STRING
    },
        ecole : {
        type: Sequelize.STRING
    }
});

var Specialite  = sequelize.define('specilaite',{
    id_spec : {
        type: Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement: true,
    }, 
    domaine : {
        type : Sequelize.STRING
    },
        description : {
        type : Sequelize.TEXT
    },

});

var Experience = sequelize.define('experience',{
    id_exp : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    titre : {
        type : Sequelize.STRING
    },
    description : {
        type : Sequelize.TEXT
    },
    date_deb : {
        type : Sequelize.STRING
    },
    date_fin : {
        type : Sequelize.STRING
    }
});
var Discussion = sequelize.define('discussion',{
    id_disc : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    }, 
    message : {
        type : Sequelize.TEXT
    }
});
var Note = sequelize.define('note',{
    id_note : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    creativite :{
        type: Sequelize.FLOAT
    },
    originalite : {
        type : Sequelize.FLOAT
    },
    rentabilite : {
        type : Sequelize.FLOAT
    }
});
var Commentaire = sequelize.define('commentaire',{
    id_comm : {
        type : Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement : true
    },
    comm : {
        type : Sequelize.TEXT
    }
});

var Proposition = sequelize.define('proposition',{
    id_prop : {
        type : Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement : true
    },
    titre_prop : {
        type : Sequelize.STRING
    },
    date_creation : {
        type : Sequelize.DATE
    },
    photo : {
        type : Sequelize.STRING
    }
});
var Description = sequelize.define('description',{
    id_desc : {
        type : Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement : true
    },
    titre_des :{
        type : Sequelize.STRING
    },
     text :{
        type : Sequelize.TEXT
    },
    file_des : {
        type : Sequelize.STRING
    },
    extension : {
        type : Sequelize.STRING
    }
});
var Idee = sequelize.define('idee',{

});
var Projet = sequelize.define('projet',{
    categorie : {
        type : Sequelize.STRING
    },
    type : {
        type : Sequelize.STRING
    },
    date_deb : {
        type : Sequelize.DATE
    },
    date_fin :{
        type : Sequelize.DATE
    }
});
var Offre = sequelize.define('offre',{
    id_offre : {
        type : Sequelize.INTEGER,
        primaryKey : true ,
        autoIncrement : true
    },
    titre_offre : {
        type: Sequelize.STRING
    },
    Description : {
        type : Sequelize.TEXT
    },
    type : {
        type : Sequelize.STRING
    },
    date_deb : {
        type : Sequelize.DATE
    },
    date_fin :{
        type : Sequelize.DATE
    }

});

var Joinstudent = sequelize.define('joinstudent',{
    accept :{
        type : Sequelize.BOOLEAN
    }
});

var Joinenseignant = sequelize.define('joinenseignant',{
});

var Poststudent = sequelize.define('poststudent',{
    accept :{
        type : Sequelize.BOOLEAN
    }
});
var notification = sequelize.define('notification',{
    type: Sequelize.STRING,
    lu: Sequelize.BOOLEAN
})
var follow = sequelize.define('follow',{

});
//Associationss
User.hasMany(Projet,{as: "projets"});
User.hasMany(notification,{as : "Notifcations"});

Etudiant.belongsTo(User, {foreignKey:"userfk"}) ;
Etudiant.hasMany(Experience,{as: "experiences"});
Etudiant.hasMany(Competence,{as : "competences"});
Etudiant.hasMany(Diplome,{as : "diplomes"});
Etudiant.hasMany(Projet,{as: "travails"});
Etudiant.belongsToMany(Offre,{through: Poststudent});
Etudiant.hasMany(Idee,{as : "idees"});
Etudiant.belongsToMany(Proposition,{through : Joinstudent});

Enseignant.belongsTo(User,{foreignKey:"userfk"});
Enseignant.belongsToMany(Idee,{through:Note});
Enseignant.belongsToMany(Proposition,{through: Joinenseignant});
Enseignant.hasMany(Experience,{as: "experiences"});
Enseignant.hasMany(Specialite,{as: "specialites"});

Entreprise.belongsTo(User,{foreignKey:"userfk"});
Entreprise.hasMany(Offre,{as:"offres"});

Commentaire.belongsTo(User,{foreignKey:"user_commentfk"});
Commentaire.hasMany(notification,{as : "Notification"});

Idee.hasMany(notification,{as : "notifications"});
Proposition.hasMany(Description,{as:"descriptions"});
Proposition.hasMany(Commentaire,{as:"commentaires"});
Proposition.belongsToMany(Enseignant,{through : Joinenseignant});
Proposition.belongsToMany(Etudiant,{through : Joinstudent});

Projet.belongsTo(Proposition,{foreignKey :"proposition_projectfk"});

Idee.belongsTo(Proposition,{foreignKey:"proposition_ideefk"});
Idee.belongsToMany(Enseignant,{through:Note});

Offre.belongsToMany(Etudiant,{through:Poststudent});
Offre.hasMany(Description,{as:"descriptions"});

Discussion.belongsTo(User, {foreignKey:"user_e",as:'send_user'}) ;
Discussion.belongsTo(User, {foreignKey:"User_r",as:'recieve_user'}) ;

Note.hasMany(notification,{as:"notifications"});

Joinenseignant.hasMany(notification,{targetKey: 'propositionIdProp'})
Proposition.hasMany(notification,{as:'notifications'})
User.belongsToMany(Proposition, {through: follow});
Proposition.belongsToMany(User, {through: follow});


sequelize.sync().then(function(){
    console.log("database started");
});


exports.User = User ;
exports.Etudiant = Etudiant ;
exports.Experience = Experience ;
exports.Competence = Competence ;
exports.Diplome = Diplome;
exports.Enseignant = Enseignant ;
exports.Entreprise = Entreprise ;
exports.Specialite = Specialite  ;
exports.Idee = Idee ;
exports.Proposition = Proposition ;
exports.Description = Description ;
exports.Note  = Note ;
exports.Commentaire = Commentaire ;
exports.Joinstudent = Joinstudent;
exports.Joinenseignant = Joinenseignant ;
exports.notification = notification ;
exports.follow = follow ;