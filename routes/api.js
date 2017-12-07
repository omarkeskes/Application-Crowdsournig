module.exports = function(io){
var express= require('express');
var router = express.Router() ;
var async = require('async');
var Model = require('../orm');
var mail = require('../exemplemail');
var User = Model.User;
var Etudiant=Model.Etudiant;
var Experience  = Model.Experience ;
var Entreprise = Model.Entreprise;
var Enseignant = Model.Enseignant ;
var Competence = Model.Competence ;
var Diplome=Model.Diplome;
var Specialite = Model.Specialite  ;
var proposition = Model.Proposition ;
var idee = Model.Idee ;
var description = Model.Description ;
var note = Model.Note ;
var commentaire = Model.Commentaire ;
var enseignant = Model.Enseignant;
var joinstudent = Model.Joinstudent;
var joinenseignant = Model.Joinenseignant ;
var Users = [] ;
var notifications = Model.notification;
var follow = Model.follow;

io.on('connection', function(socket) {
    console.log("connected :"+socket.id);
    var user = {id :{},as:{},socketid:{}}
    socket.on("username",function(data){
        console.log(data);
        user.id = data.id ;
        user.as = data.as ;
        user.socketid = socket.id ;
        Users.push(user);
        console.log(Users);
    });
    socket.on('disconnect', function () {
        Users.forEach(function(element,index) {
            if (element.socketid == socket.id){
                Users.splice(index,1);
            }

        }, this);
    });

});
router.get('/students',function(req,res,next){
    Etudiant.findAll().then(function(etudiants){
        res.json(etudiants) ;
    });
});
router.post('/profileStudent',function(req,res,next){
    var data  = {etudiant : {}, experiences :{},competences :{},diplomes :{} ,email :{}} ;
    Etudiant.find({where : {userfk : req.body.id}}).then(function(etudiant){
        data.etudiant = etudiant ;
        Experience.findAll({where:{EtudiantId : etudiant.id}}).then(function(experiences){
            data.experiences = experiences ;
        }).then(function(){
         Competence.findAll({where : {EtudiantId : etudiant.id}}).then(function(competences){
            data.competences = competences ;
         }).then(function(){
         Diplome.findAll({where : {EtudiantId : etudiant.id}}).then(function(diplomes){
            data.diplomes = diplomes ;
         })
         .then(function(){
         User.find({where : {login : req.body.id}}).then(function(user){
            data.email = user.email ;
         }).then(function(){
            res.json(data);                         
        });
    });
    });
        })
    });
});

router.get('/enseignants',function(req,res,next){
    Enseignant.findAll().then(function(enseignants){
        res.json(enseignants) ;
    });
});
router.post('/profileEnseignant',function(req,res,next){
    var data  = {enseignant : { }, experiences :{},specialites :{},email :{}} ;
    Enseignant.find({where : {userfk : req.body.id}}).then(function(enseignant){
        data.enseignant = enseignant ;
        Experience.findAll({where:{EnseignantId : enseignant.id}}).then(function(experiences){
            data.experiences = experiences ;
        }).then(function(){
         Specialite.findAll({where : {EnseignantId : enseignant.id}}).then(function(specialites){
            data.specialites = specialites ;
         }).then(function(){
         User.find({where : {login : req.body.id}}).then(function(user){
            data.email = user.email ;
         }).then(function(){
            res.json(data);                         
        });
    });
        })
    });
});
router.get('/entreprises',function(req,res,next){
    Entreprise.findAll().then(function(entreprises){
        res.json(entreprises) ;
    });
});
router.post('/profil/editEtd',function(req,res,next){

   
    Etudiant.find({where : {id : req.body.id}}).then(function(etudiant){
        etudiant.nom=req.body.nom;
        etudiant.prenom=req.body.prenom;
        etudiant.classe=req.body.classe;
        etudiant.tel=req.body.tel;
        etudiant.adresse=req.body.adresse;
        etudiant.save().then(function() {
            res.json({success:true});
        })

    });
});
router.post('/mon_profil/editEns',function(req,res,next){

   
    Enseignant.find({where : {id : req.body.id}}).then(function(enseignant){
        enseignant.nom=req.body.nom;
        enseignant.prenom=req.body.prenom;
        enseignant.classe=req.body.profession;
        enseignant.save().then(function() {
            res.json({success:true});
        })

    }); 
});
router.post('/profil/description',function(req,res,next){
    var id=req.body.id;
    var des=req.body.des;
   
    Etudiant.find({where : {id : id}}).then(function(etudiant){
        etudiant.description=des;
        etudiant.save().then(function(etudiant) {
            res.json({success:true});
        })

    });
});

router.post('/mon_profil/description',function(req,res,next){
    var id=req.body.id;
    var des=req.body.des;
   
    Enseignant.find({where : {id : id}}).then(function(enseignant){
        enseignant.description=des;
        enseignant.save().then(function() {
            res.json({success:true});
        })

    });
});

router.post('/profil/experience',function(req,res,next){

    Experience.create({
        titre : req.body.titre,
        date_debut : req.body.dateDeb,
        date_fin : req.body.dateFin,
        description:req.body.des,
        etudiantId:req.body.id
    }).then(function(experience){
       if(experience){
           res.json({success:true});
       }else {
           res.json({success:false});
       }
    })
});

router.post('/profil/deleteExperience',function(req,res,next){
    Experience.find({where : {id_exp : req.body.id}}).then(function(exp){
        exp.destroy({ force: true }).then(function(){
            res.json({success:true});
        })

    });
});

router.post('/mon_profil/experience',function(req,res,next){

    Experience.create({
        titre : req.body.titre,
        date_debut : req.body.dateDeb,
        date_fin : req.body.dateFin,
        description:req.body.des,
        enseignantId:req.body.id
    }).then(function(experience){
       if(experience){
           res.json({success:true});
       }else {
            res.json({success:false});
       }
       
    })
});

router.post('/mon_profil/deleteExperience',function(req,res,next){
    Experience.find({where : {id_exp : req.body.id}}).then(function(exp){
        exp.destroy({ force: true }).then(function(){
            res.json({success:true});
        })

    });
});

router.post('/profil/competence',function(req,res,next){

    Competence.create({
        domaine : req.body.nom,
        niveau : req.body.niveau,
        etudiantId:req.body.id
    }).then(function(competence){
       if(competence){
           res.json({success:true});
       }else {
           res.json({success:false});
       }
    })
});

router.post('/mon_profil/specialite',function(req,res,next){

    Specialite.create({
        domaine : req.body.nom,
        enseignantId:req.body.id
    }).then(function(specialite){
       if(specialite){
           res.json({success:true});
       }else{
           res.json({success:false});
       }
    })
});
router.post('/profil/diplome',function(req,res,next){

    Diplome.create({
        nom : req.body.nom,
        annee : req.body.annee,
        ecole:req.body.ecole,
        etudiantId:req.body.id
    }).then(function(diplome){
        if(diplome){
            res.json({success:true});
        }else{
            res.json({success:false});
        }
    })
});

router.get('/ideas',function(req,res,next){
    var data = [];
    
idee.count().then(function(count){

    var x = setInterval(function(){
        if (data.length == count ){
            res.json(data);
            data.push('test');
            clearInterval(x);
        }

    },100);
});
    idee.findAll().then(function(ideas){
        ideas.forEach(function(element) {
                var idea = {id:{},proposition:{},proprietaire:{},notes:[],nombrenote:{},notemoyenne:[]};
                idea.id = element.id ;
             proposition.find({where : {id_prop : element.proposition_ideefk}}).then(function(prop){
                idea.proposition = prop ;
            });
            Etudiant.find({where : {id: element.etudiantId}}).then(function(etu){
                idea.proprietaire = etu;
            });
            note.findAll({where : { ideeId : element.id }}).then(function(notes){
               idea.notes = notes ; 
               idea.nombrenote = idea.notes.length ; 
               notes.forEach(function(note){
                   var moy ;
                   moy = (parseInt(note.creativite) + parseInt(note.originalite)+parseFloat(note.rentabilite))/3 ;
                   idea.notemoyenne.push(moy);
               })
               data.push(idea);
                       
            }).then(function(){    
                
            });
        }, this);
           
        
    });
});

router.post('/getNotes',function(req,res,next){
    var id = req.body.id ;
   
    var data = [];
    note.findAll({where:{ideeId:id}}).then(function(notes){
        notes.forEach(function(element) {
             var note = {note :{},enseignant : {}}
            note.note = element ;
            enseignant.find({where : {id : element.enseignantId}}).then(function(en){
                note.enseignant = en ;
                data.push(note) ;
            });
        }, this);
        note.count({where:{ideeId:id}}).then(function(count){
            var x = setInterval(()=>{
                    if (data.length == count ){
                        res.json(data);
                        data.push('test');
                        clearInterval(x);
                    }
            },100);
        })
        
    });
});
router.post('/getDescriptions',function(req,res,next){
    var id = req.body.id ;
    var data = [] ;
    description.findAll({where:{propositionIdProp : id}}).then(function(des){
        data = des ;
        res.json(data);        
    });
});
router.post('/getComments',function(req,res,next){
    var id = req.body.id ;
    var data = [];
    commentaire.findAll({where:{propositionIdProp : id}}).then(function(comm){
        
        comm.forEach(function(element) {
            var comment = {coment : {},user:{}} ;
            comment.coment = element ;
            Etudiant.find({where:{userfk : element.user_commentfk}}).then(function(etudiant){
                if (etudiant){
                    comment.user = etudiant ;
                    data.push(comment);
                }
            }); 
            enseignant.find({where:{userfk : element.user_commentfk}}).then(function(enseignant){
                if (enseignant){
                    comment.user = enseignant ;
                    data.push(comment);
                }
            })
        }, this);

        
        
    });
    commentaire.count({where:{propositionIdProp : id}}).then(function(count){
            var x = setInterval(function(){
                if (count == data.length){
                    res.json(data);
                    data.push('test');
                    clearInterval(x);
                }
            },100);
        })
});
router.post('/idea/joinstudent',function(req,res,next){
    var id_prop = req.body.id_prop;
    var id_etd = req.body.id_etd;
    if(req.body.as == 'student'){
        var join = joinstudent.create({
            etudiantId : id_etd,
            propositionIdProp : id_prop,
            accept : false
        });
        joinstudent.sync().then(function(join,err){
            if (join){
                idee.find({where:{proposition_ideefk:id_prop}}).then(function(id){
                    Users.forEach(function(element) {
                        if (element.id == id.etudiantId && element.as =="student"){
                            console.log('test') ;
                            var j = {proposition:{},etudiant:{}}
                            proposition.find({where:{id_prop : id_prop}}).then(function(prop){
                                if (prop){
                                    j.proposition = prop
                                }
                            }).then(function(){
                                Etudiant.find({where:{id: id_etd}}).then(function(etd){
                                    if (etd){
                                        j.etudiant = etd ;
                                        io.to(element.socketid).emit('notifyjoin',j);
                                    }
                                })
                            });
                        }

                    }, this);
                })
                 res.json({success: true});

            }else {
                res.json({success:false});
                }
        });
    }else if(req.body.as == 'enseignant'){
        var id_prop = req.body.id_prop;
    var id_etd = req.body.id_etd;
    joinenseignant.create({
        enseignantId : id_etd,
        propositionIdProp : id_prop,
    }).then(function(join){
        if (join){
            res.json({success: true});
            idee.find({where:{proposition_ideefk:id_prop}}).then(function(etd){
                console.log(etd);
                Etudiant.find({where: {id:etd.etudiantId}}).then(function(etudiant){
                    notifications.create({
                    type : "js",
                    lu : false,
                    joinenseignantEnseignantId : join.enseignantId,
                    userLogin : etudiant.userfk,
                    proposition_ideefk : idee.proposition_ideefk
                });
            
                notifications.sync().then(function(notification){
                    Users.forEach(function(element) {
                if (element.id == etd.etudiantId && element.as == 'student'){
                    io.to(element.socketid).emit('newnotification',{id : notification.id})
                }
                },this)
                

            });    
                })
                
            })
        }else {
            res.json({success:false});
        }
    });
    }
});
router.post('/idea/getTeam',function(req,res,next){
    var id_prop = req.body.id_prop;
    var data ={enseignant:null,student:null};
    var x = setInterval(function(){
            if (data.enseignant && data.student ){  
                res.json(data)
                data.enseignant = null ;
                clearInterval(x);
            }
                   
        },100);
    joinenseignant.findAll({ where:{propositionIdProp: id_prop}}).then(function(ens){
        var ense = []
        ens.forEach(function(element) { 
            enseignant.find({where:{id:element.enseignantId}}).then(function(e){
                ense.push(e);
            })
        }, this);
        var x = setInterval(function(){
            if (ense.length == ens.length){
                data.enseignant = ense;
                ense.push([])
                console.log("Enseignant rempli")
                clearInterval(x);
            }
            
        },100);
    });
    joinstudent.findAll({ attributes: ['etudiantId'],where:{propositionIdProp: id_prop,accept: true}}).then(function(etd){
        console.log(etd);
        var etds = []
        etd.forEach(function(element) {
            console.log(element.etudiantId);
            Etudiant.find({where:{id:element.etudiantId}}).then(function(e){
                etds.push(e);
            }) 
           
    }, this);
        var x =setInterval(function(){
            if (etds.length == etd.length){
                data.student = etds;
                etds.push([])
                console.log('etudiants rempli')
                clearInterval(x);
            }
        },100);
    })

});
router.post('/idea/postcomment',function(req,res,next){
    var comm = req.body.commentaire;
    var id_user = req.body.id_user ;
    var id_prop = req.body.id_prop ;
    commentaire.create({
        comm : comm,
        user_commentfk : id_user,
        propositionIdProp : id_prop
    }).then(function(comm){
        if(comm){
            res.json({success: true});
            idee.find({where:{proposition_ideefk:id_prop}}).then(function(idee){
                Etudiant.find({where:{id:idee.etudiantId}}).then(function(etudiant){
                    notifications.create({
                        type:"cm",
                        lu: false,
                        commentaireIdComm : comm.id_comm,
                        userLogin : etudiant.userfk,
                        
                    })
                    follow.findAll({where:{propositionIdProp:idee.proposition_ideefk}}).then(function(follows){
                                    follows.forEach(function(element){
                                    notifications.create({
                                    type:'nocm',
                                    lu : false,
                                    userLogin : element.userLogin,
                                    proposition_ideefk : idee.proposition_ideefk
                                    
                                })
                        })
                    })
                    notifications.sync().then(function(not){
                          Users.forEach(function(element) {
                              
                if (element.id == etudiant.id && element.as == 'student'){
                    io.to(element.socketid).emit('newnotification',{id : not.id})
                }
                },this);
                    })

                })
            })
        }
    })
});
router.post('/idea/AddNote',function(req,res,next){
    var enseignant_id = req.body.enseignant_id ;
    var idea_id = req.body.idea_id ;
    var creativite = req.body.creativite ;
    var originalite = req.body.originalite ;
    var rentabilite = req.body.rentabilite ;
    note.create({
                    creativite : creativite,
                    originalite : originalite,
                    rentabilite : rentabilite,
                    ideeId : idea_id,
                    enseignantId : enseignant_id 
                }).then(function(note){
                    if (note){
                        res.json({success:true})
                        idee.find({where:{id:idea_id}}).then(function(idee){
                            Etudiant.find({where:{id:idee.etudiantId}}).then(function(etd){
                                notifications.create({
                                    type:'no',
                                    lu : false,
                                    noteIdNote : note.id_note,
                                    userLogin : etd.userfk,
                                    
                                })
                                follow.findAll({where:{propositionIdProp:idee.proposition_ideefk}}).then(function(follows){
                                    follows.forEach(function(element){
                                    notifications.create({
                                    type:'nofl',
                                    lu : false,
                                    userLogin : element.userLogin,
                                    proposition_ideefk : idee.proposition_ideefk
                                    
                                })
                                    },this)                               });
                                
                                notifications.sync().then(function(not){

                          Users.forEach(function(element) {
                if (element.id == etd.etudiantId ){
                    io.to(element.socketid).emit('newnotification',{id : notification.id})
                }
                },this);
                    })
                            });
                        })
                    }else {
                        res.json({success:false})
                    }
            });
});
router.post('/idea/getjoin',function(req,res,next){
    var id_etud = req.body.id ;
    var data = [] ;
    idee.findAll({where:{etudiantId:id_etud}}).then(function(idees){
        idees.forEach(function(element) {
            proposition.find({where:{id_prop:element.proposition_ideefk}}).then(function(proposition){
                    joinstudent.findAll({where:{propositionIdProp:proposition.id_prop,accept: false}}).then(function(joins){
                        joins.forEach(function(element) {
                            var j = {proposition:{},etudiant:{}}
                            j.proposition = proposition;
                            Etudiant.find({where:{id: element.etudiantId}}).then(function(etd){
                                j.etudiant = etd;
                                data.push(j);
                            });
                            var x = setInterval(function(){
                                if (data.length == joins.length){
                                    res.json(data);
                                    data.push('test');
                                    clearInterval(x);
                                }
                            },100);
                        }, this);
                    })
            })
        }, this);
    })
});
router.post('/idea/creer',function(req,res,next){
 
    proposition.create({
        titre_prop : req.body.titre,
        date_creation:new Date()

    }).then(function(prop){
        idee.create({
           etudiantId : req.body.id_user ,
           proposition_ideefk : prop.id_prop

        }).then(function(){
                
               description.create({
                    titre_des : "Description",
                    text : req.body.des1,
                    propositionIdProp : prop.id_prop 
                });
                description.create({
                    titre_des : "Comment avez-vous eu l’idée",
                    text : req.body.des2,
                    propositionIdProp : prop.id_prop 
                });
                description.create({
                    titre_des : "Vos produits et services",
                    text:req.body.des3,
                    propositionIdProp : prop.id_prop
                });
                description.create({
                    titre_des : "Les technologies à utiliser",
                    text : req.body.des4,
                    propositionIdProp : prop.id_prop 
                });
                description.create({
                    titre_des : "Vos facteurs de réussite",
                    text : req.body.des5,
                    propositionIdProp : prop.id_prop
                });
                description.create({
                    titre_des : "Vos facteurs différenciants et disruptifs par rapport à l’existant",
                    text:req.body.des6,
                    propositionIdProp : prop.id_prop
                }).then(function(){
                    res.json({data:true})
                });
                    
        }) ;
    })
});
router.post('/checkjoin',function(req,res,next){
    var user_id = req.body.id ;
    var idea_id = req.body.prop_id ;
    var asuser = req.body.as ;
    if(asuser == 'student'){
        joinstudent.count({where:{etudiantId : user_id,propositionIdProp:idea_id,accept:false}}).then(function(count){
            if (count >= 1){
                res.json({join : true});
            }else {
                res.json({join : false});
            }
        })
    }
});
router.post('/idea/modifyjoinstudent',function(req,res,next){
    var id_user = req.body.id_user ;
    var id_prop = req.body.id_prop ;
    var accept = req.body.accept ;
    if(accept){
        joinstudent.find({where:{etudiantId:id_user,propositionIdProp:id_prop}}).then(function(join){
            join.accept = true ;
            join.save();
            res.json({success : true});
            Users.forEach(function(element) {
                if (element.id == id_user){
                    io.to(element.id).emit('acceptinvitation',{prop : id_prop})
                }

            }, this);
        })
    }else {
        joinstudent.find({where:{etudiantId:id_user,propositionIdProp:id_prop}}).then(function(join){
            join.destroy({force : true});
    });
    }
});
router.post('/idea/follow',function(req,res,next){
    console.log(req.body);
    follow.create({
        propositionIdProp : req.body.id_idee ,
        userLogin : req.body.login
    }).then(function(foll){
        if(foll){
            res.json({success:true});
        }else {
            res.json({success:false});
        }
    })
});
router.post('/idea/checkfollow',function(req,res,next){
    follow.find({where : {propositionIdProp
        :req.body.id_idee,userLogin:req.body.login}}).then(function(foll){
        if(foll){
            res.json({success:true});
        }else {
            res.json({success:false});
        }
    })
});
router.post('/notifications/',function(req,res,next){
    var data = [];
    notifications.findAll({where:{userLogin:req.body.id},limit:10,order:"createdAt DESC"}).then(function(notifications){
        var x = setInterval(function () {
            if (data.length == notifications.length){
                res.json(data);   
                data.push([]);
                clearInterval(x);
            }
        },100);
        notifications.forEach(function(element,index) {
            var notification = {type:{},user:null,proposition:null}; 
            notification.type = element.type ;
            if (element.type == "js"){
                    notification.proposition = "votre idée";
                    enseignant.find({where:{id:element.joinenseignantEnseignantId}}).then(function(enseignant){
                        if (enseignant){
                                notification.user = enseignant ;
                                data.push(notification);
                        }else {
                            notification.user = "" ;
                            data.push(notification);
                        }
                    })
                    
            }else if (element.type == "no"){
                note.find({where:{id_note:element.noteIdNote},order: [['updatedAt', 'DESC']]}).then(function(note){
                    if(note){
                        idee.find({where :{id:note.ideeId}}).then(function(idee){
                            proposition.find({id_prop:idee.proposition_ideefk}).then(function(proposition){
                                notification.proposition = proposition;
                            });
                        })
                        enseignant.find({where:{id:note.enseignantId}}).then(function(enseignant){
                            notification.user = enseignant;
                            data.push(notification);
                        })
                    }else {
                        notification.proposition = "";
                        notification.user = " ";
                        data.push(notification);
                    }
                });

            }else if(element.type == "cm"){
                commentaire.find({where:{id_comm:element.commentaireIdComm}}).then(function(commentaire){
                    if(commentaire){
                    Etudiant.find({where:{userfk:commentaire.user_commentfk}}).then(function(etudiant){
                        if (etudiant){
                            notification.user = etudiant ;
                            data.push(notification);  
                        }else {
                            enseignant.find({where:{userfk:commentaire.user_commentfk}}).then(function(enseignant){
                                    notification.user = enseignant ;
                                    data.push(notification);
                            });
                        }   
                    });
                    proposition.find({where:{id_prop : commentaire.propositionIdProp}}).then(function(proposition){
                        notification.proposition = proposition;
                    })
                    }else {
                        notification.proposition = "";
                        notification.user = " ";
                        data.push(notification);
                    }    
            })        
            }else {
                proposition.find({where:{id_prop:element.propositionIdPropn}}).then(function(prop){
                    notification.proposition = prop ;
                    data.push(notification);
                })
            }            
        }, this);
    })
});
router.get('/getnotificationsfollow',function(req,res,next){
  /*  var id = req.body.id ;
    var data = [];
    follow.findAll({where:{userLogin:id}}).then(function(follows){
        proposition.find({where :{prop_id:follows.propositionIdProp}}).
    })*/
})
router.get('/sendmail',function(req,res,next){
    mail.sendMailto(req.body.to,req.body.text);
});
return router ;
}
