var Model = require('./orm');
var bcrypt = require('bcrypt-nodejs');
var User = Model.User ;
var Etudiant = Model.Etudiant ;
var Enseignant = Model.Enseignant ;
var Entreprise = Model.Entreprise ;
var Experience = Model.Experience ;
var Competence = Model.Competence ;
var Specialite = Model.Specialite ;
var Diplome = Model.Diplome ;
var idee = Model.Idee ;
var proposition = Model.Proposition;
var Note =  Model.Note ;
var Description = Model.Description;
var Commentaires = Model.Commentaire ;
var password ;

bcrypt.hash('0000',null,null,function(err,res){
    User.create({
        login : 'hamza',
        password : res ,
        email : 'hamza.mensi@gmail.com'
    });
});
bcrypt.hash('iteb',null,null,function(err,res){
User.create({
    login : 'iteb',
    password : res ,
    email : 'iteb.khayati@gmail.com'
});
});
bcrypt.hash('sandra',null,null,function(err,res){
User.create({
    login : 'sandra',
    password : res,
    email : 'sandra.abid@gmail.com'
});
});
bcrypt.hash('youssef',null,null,function(err,res){
User.create({
    login : 'youssef',
    password : res,
    email : 'youssef.halima@gmail.com'
});
});
bcrypt.hash('mehrez',null,null,function(err,res){
User.create({
    login : 'mehrez',
    password : res,
    email : 'mehrez.essafi@gmail.com'
});
});
bcrypt.hash('vermeg',null,null,function(err,res){
User.create({
    login : 'vermeg',
    password : res,
    email : 'vermeg.solutions@gmail.com'
});
});
bcrypt.hash('khayati',null,null,function(err,res){
User.create({
    login : 'khayati',
    password : res,
    email : 'khayati.oualid@gmail.com'
});
});
User.sync().then(function(){
    console.log('users created');
    Etudiant.create({
    id : 1,
    nom : 'Mensi',
    prenom : 'Hamza',
    photo:'hamza.jpg',
    tel : '20661383',
    adresse : '25 Banlieu',
    classe : '2ING1',
    description:'Je suis actuellement étudiant en école d\'ingénieur en informatique et spécialisé dans la réalité virtuelle et le multimédia. Depuis plusieurs années je suis passionné par le développement d\'applications multimédia, de sites web et de jeux vidéo 2D/3D. Je suis également passionné par les réalisations graphiques telles que la création d\'images de synthèses 3D, le design ou encore la peinture digitale . Enfin, je suis vice-président de l\'association prodit et fondateur du groupe étudiant prodit Students.',
    userfk : 'hamza'
});
Etudiant.create({
    id : 2,
    nom : 'Khayati',
    prenom : 'Iteb',
    tel : '20661383',
    classe : '2ING1',
    photo:'iteb.jpg',
    description:'Je suis actuellement étudiant en école d\'ingénieur en informatique et spécialisé dans la réalité virtuelle et le multimédia. Depuis plusieurs années je suis passionné par le développement d\'applications multimédia, de sites web et de jeux vidéo 2D/3D. Je suis également passionné par les réalisations graphiques telles que la création d\'images de synthèses 3D, le design ou encore la peinture digitale . Enfin, je suis vice-président de l\'association prodit et fondateur du groupe étudiant prodit Students.',
    adresse : 'Mnihla',
    userfk : 'iteb'
});
Etudiant.create({
    id :3,
    nom : 'Abid',
    prenom : 'Sandra',
    classe : '2ING1',
    description:'Je suis actuellement étudiant en école d\'ingénieur en informatique et spécialisé dans la réalité virtuelle et le multimédia. Depuis plusieurs années je suis passionné par le développement d\'applications multimédia, de sites web et de jeux vidéo 2D/3D. Je suis également passionné par les réalisations graphiques telles que la création d\'images de synthèses 3D, le design ou encore la peinture digitale . Enfin, je suis vice-président de l\'association prodit et fondateur du groupe étudiant prodit Students.',
    tel : '20661383',
    adresse : '12 Rades',
    photo:'sandra.jpg',
    userfk : 'sandra'
});
Enseignant.create({
    id :1,
    nom : 'Ben Halima',
    prenom : 'Youssef',
    description:'Docteur en Informatique depuis Janvier 2014 de l\'Ecole Nationale des Sciences de l\'Informatique, Membre du laboratoire de Recherche RIADI à l\'ENS Maitre assistant à l\'université de La Manouba à l\'Institut Supérieurs des Arts du Multimédia ISAMM. Consultat IT chez SIGMA Conseil depuis 2012.',
    profession : 'Enseignant',
    photo:'halima.jpg',
    userfk : 'youssef'
});
Enseignant.create({
    id :2,
    nom : 'Essafi',
    prenom : 'Mehrez',
    description:'Docteur en Informatique depuis Janvier 2014 de l\'Ecole Nationale des Sciences de l\'Informatique, Membre du laboratoire de Recherche RIADI à l\'ENS Maitre assistant à l\'université de La Manouba à l\'Institut Supérieurs des Arts du Multimédia ISAMM. Consultat IT chez SIGMA Conseil depuis 2012.',
    profession : 'Enseignant',
    photo:'mehrez.jpg',
    userfk : 'mehrez'
});
Enseignant.create({
    id :3,
    nom : 'Khayti',
    prenom : 'Walid',
    description:'Docteur en Informatique depuis Janvier 2014 de l\'Ecole Nationale des Sciences de l\'Informatique, Membre du laboratoire de Recherche RIADI à l\'ENS Maitre assistant à l\'université de La Manouba à l\'Institut Supérieurs des Arts du Multimédia ISAMM. Consultat IT chez SIGMA Conseil depuis 2012.',
    profession : 'Enseignant',
    photo:'walid.png',
    userfk : 'khayati'
});
Entreprise.create({
    id :6,
    nom : 'Vermeg',
    facebook : 'https://www.facebook.com/Vermeg/?fref=ts',
    in : 'https://www.linkedin.com/company/vermeg',
    site:'https://www.vermeg.com/',
    adresse:'Rue du Lac Biwa, Tunis',
    description:'We have evolved with our Clients and the Market, as a Solutions and Services Integrator. Now Vermeg is a key Partner for Business & Digital Transformation in Insurance & Finance.',
    photo:'vermeg.jpg',
    userfk : 'vermeg'
});
Entreprise.sync().then(function(){
    console.log('entreprise crées');
})
Etudiant.sync().then(function(){
    console.log('etudiant crées');
}).then(function(){
    Experience.create({
      titre : "IT Consultant, lead tech, architect at Docapost - La Poste",
      description : "Lead tech et software architect au sein du projet Hub Numérique (plateforme universelle des objets connectés de La Poste). Technologies : JEE, Spring, Vert.x, Cassandra, ElasticSearch, Backbone.JS, Jenkins, Docker, Puppet, Git.",
      date_deb : "04-janv.-2016",
      date_fin : "Valable jusqu'à présent",
      etudiantId : 1  
    });
    Experience.create({
      titre : "Capgemini TS CSD - Fret SNCF (France)",
      description : "Refonte d'un SI de gestion commerciale et d'orchestration au Fret SNCF en JEE (Java 8) / Spring (IoC, MVC, Security, Batch) / CDI / Weld / Thymleaf / JQuery / Bootstrap / Hibernate (bases Oracle 11g et PostgreSQL) / WS REST et SOAP avec CXF / ElasticSearch / Procédures stockées et triggers en PL/SQL. DevOps avec Chef et Jenkins. Support technique pour les équipes de développeurs off shore sur Casablanca. Participation à la mise en place des outils de tests et de mesure de la qualité de code (frameworks, Jenkins, SonarQube, JaCoCo, Checkstyle, et Findbugs). Mise en place d'un framework open source pour gérer les workflows et cycles de vie des dossiers de commandes du fret.",
      date_deb : "01-janv.-2015",
      date_fin : "24-déc.-2015",
      etudiantId : 1  
    });

    Experience.sync().then(function(){
        console.log("experiences crées");
    });
    Competence.create({
        domaine : "JAVA",
        niveau : 5,
        etudiantId : 1
    });
        Competence.create({
        domaine : "nodejs",
        niveau : 3,
        etudiantId : 1
    });
    Competence.sync().then(function(){
        console.log("competences crees");
    })
            Diplome.create({
        nom : "Licence en Informatique et Multimédia",
        annee : "2015",
        ecole:"ISAMM",
        etudiantId : 1
    });
    Diplome.sync().then(function(){
        console.log("diplomes crees");
    })
});

Enseignant.sync().then(function(){
    console.log('enseignant crées');
}).then(function(){
        Experience.create({
      titre : "Maitre assistant",
      description : "Ministère de l'enseignement supérieur et de recherche scientifique",
      date_deb : "septembre 2014",
      date_fin : "Aujourd’hui (2 ans 7 mois)",
      enseignantId : 1
    });
    Experience.create({
      titre : "Responsable SI",
      description : "sigma conseil",
      date_deb : "novembre 2012",
      date_fin : "Aujourd’hui (4 ans 5 mois)",
      enseignantId : 1
    });
            Experience.create({
      titre : "Assistant permanent",
      description : "Ministère de l'enseignement supérieur et de recherche scientifique",
      date_deb : "septembre 2014",
      date_fin : "Aujourd’hui (2 ans 7 mois)",
      enseignantId : 2
    });
    Experience.create({
      titre : "responsable technique",
      description : "sigma conseil",
      date_deb : "novembre 2012",
      date_fin : "Aujourd’hui (4 ans 5 mois)",
      enseignantId : 2
    });

    Experience.sync().then(function(){
        console.log("experiences enseignants crées");
    });
        Specialite.create({
        domaine : "MySql",
        enseignantId : 1
    });
            Specialite.create({
        domaine : "Big Data",
        enseignantId : 1
    });
            Specialite.create({
        domaine : "Architecture Systeme",
        enseignantId : 2
    });
            Specialite.create({
        domaine : "Cloud Computing",
        enseignantId : 2
    });

    Specialite.sync().then(function(){
        console.log("Specialite crees");
    })
    proposition.create({
        id_prop : 1,
        titre_prop :'Application VR',
        photo :'Vr.jpg'

    });
    proposition.create({
        id_prop : 3,
        titre_prop :'Un logiciel de gestion en ligne ',
        photo :'logiciel.png',
        date_creation: new Date()

    })
    proposition.sync().then(function(){
        idee.create({
           etudiantId : 2 ,
           proposition_ideefk : 1

        });
         idee.create({
           etudiantId : 1 ,
           proposition_ideefk : 3

        });
        idee.sync().then(function(){
                Note.create({
                    creativite : 8,
                    originalite : 7,
                    rentabilite : 8,
                    ideeId : 1,
                    enseignantId :1
                });
                Note.create({
                    creativite : 6,
                    originalite : 7,
                    rentabilite : 9,
                    ideeId : 1,
                    enseignantId : 2 
                });
                Note.sync() ;
                Description.create({
                    titre_des : "Description",
                    text : "tolteck : un logiciel de gestion en ligne pour les artisans du bâtiment",
                    propositionIdProp : 1 
                });
                Description.create({
                    titre_des : "Comment avez-vous eu l’idée ",
                    text : "Après avoir travaillé un an chez Withings (objets connectés dans la santé), Yann Giret l’un des fondateurs de Foodvisor s’est rendu compte qu’il existait peu de moyens simples et rapides pour suivre son alimentation. En effet, les applications actuelles pour tracker son alimentation nécessitent de noter manuellement tout ce que l’on mange. Il a saisi cette opportunité et a décidé d’appliquer ses connaissances en vision par ordinateur à la reconnaissance d’images de nourritures avec son ami Charles Boes.",
                    propositionIdProp : 1 
                });
                Description.create({
                    titre_des : "Comment avez-vous eu l’idée",
                    text : "Les artisans du bâtiment sont présents partout autour de nous : chez nous, au bureau, dans les commerces… Ils sont plus de 400 000 à construire et entretenir les bâtiments qui nous entourent. Intéressés par cette industrie, nous avons décidé de questionner les ouvriers que nous avions l’occasion de rencontrer afin de mieux connaître leur vie et comprendre leur problème. Au bout de quelques discussions, il nous est clairement apparu que les artisans du bâtiment avaient une vie extrêmement intense (plus de 70 heures de travail par semaine), répartie entre les chantiers et la gestion de l’entreprise.",
                    propositionIdProp : 3 
                });
                                                Description.create({
                    titre_des : "Les technologies à utiliser",
                    text : "Prestashop est plus adapté aux sites e-commerce d'ampleur plus réduite. Il conviendra bien mieux aux entrepreneurs qui cherchent à se positionner sur un petit marché ou vendre des produits sur un marché national.",
                    propositionIdProp : 1 
                });
                Description.create({
                    titre_des : "Vos facteurs de réussite",
                    text : "Nous avons pris le temps d’aller directement au contact des artisans du bâtiment, pour partager leur vie, comprendre leur problème et discuter avec eux des solutions que nous envisagions. Du côté start-up, nous sommes soutenus par Le Studio (www.lestudio.vc), qui nous apporte les fonds nécessaires pour lancer le projet mais aussi les conseils, l’expérience et le réseau qui sont indispensables pour lancer rapidement une start-up qui fonctionne.",
                    propositionIdProp : 3 
                });
                Description.create({
                    titre_des : "Vos facteurs différenciants et disruptifs par rapport à l’existant",
                    text:"Foodvisor est la première application mobile qui permet d’obtenir les informations nutritionnelles de son plat à partir d’une simple photo. L’équipe de Foodvisor développe ses propres algorithmes de deep learning dont elle est propriétaire.",
                    propositionIdProp : 1
                });
                Description.create({
                    titre_des : "Description",
                    text : "tolteck : un logiciel de gestion en ligne pour les artisans du bâtiment",
                    propositionIdProp : 3 
                });
                Description.create({
                    titre_des : "Comment avez-vous eu l’idée",
                    text : "Les artisans du bâtiment sont présents partout autour de nous : chez nous, au bureau, dans les commerces… Ils sont plus de 400 000 à construire et entretenir les bâtiments qui nous entourent. Intéressés par cette industrie, nous avons décidé de questionner les ouvriers que nous avions l’occasion de rencontrer afin de mieux connaître leur vie et comprendre leur problème. Au bout de quelques discussions, il nous est clairement apparu que les artisans du bâtiment avaient une vie extrêmement intense (plus de 70 heures de travail par semaine), répartie entre les chantiers et la gestion de l’entreprise.",
                    propositionIdProp : 3 
                });
                Description.create({
                    titre_des : "Vos produits et services",
                    text:"Nous développons un logiciel de gestion commerciale en ligne pour les artisans du bâtiment. Il regroupe:l’édition et le suivi des devis et des factures, la gestion du tempset la gestion des clients",
                    propositionIdProp : 3
                });
                                                Description.create({
                    titre_des : "Les technologies à utiliser",
                    text : "Prestashop est plus adapté aux sites e-commerce d'ampleur plus réduite. Il conviendra bien mieux aux entrepreneurs qui cherchent à se positionner sur un petit marché ou vendre des produits sur un marché national.",
                    propositionIdProp : 3 
                });
                Description.create({
                    titre_des : "Vos facteurs de réussite",
                    text : "Nous avons pris le temps d’aller directement au contact des artisans du bâtiment, pour partager leur vie, comprendre leur problème et discuter avec eux des solutions que nous envisagions. Du côté start-up, nous sommes soutenus par Le Studio (www.lestudio.vc), qui nous apporte les fonds nécessaires pour lancer le projet mais aussi les conseils, l’expérience et le réseau qui sont indispensables pour lancer rapidement une start-up qui fonctionne.",
                    propositionIdProp : 3 
                });
                Description.create({
                    titre_des : "Vos facteurs différenciants et disruptifs par rapport à l’existant",
                    text:"Nous sommes le premier SaaS de gestion commerciale pour les artisans du bâtiment. En tant que tel : Nous sommes en ligne, lorsque nos concurrents sont installés sur un poste fixe. Cela permet 1) une sauvegarde plus sure des données, 2) un accès partout et en permanence au logiciel et 3) un accès autorisé à l’ensemble des collaborateurs de l’entreprises",
                    propositionIdProp : 3
                });
                Commentaires.create({
                    comm : "j'adore cette idée bonne continuation :) ",
                    user_commentfk : 'iteb',
                    propositionIdProp : 1
                });
                Commentaires.create({
                    comm : "oh ohh mala banga !!",
                    user_commentfk : 'sandra',
                    propositionIdProp : 1
                });




        }) ;
    });

});
});