const AvionModel = require('../models/avion.model');

// Récupérer tous les liste des avions
exports.findAllAvion = (req,res) => {
    AvionModel.getAllAvions( (err,avions) => {
        // console.log('Liste des avions');
        if(err) res.send(err);
        // console.log('avions',avions);
        // Affiche resultat requete @ console

        // response.send() => envoie resultat au view
        res.send(avions);
    })
}

// Récupérer un avion
exports.findAvion = (req,res) => {
    // console.log('un avion');
    let id = req.params.id;
    AvionModel.getOneAvion( id,(err,avion) => {
        if(err) res.send(err);
        // console.log('avions',avion);
        res.send(avion);
    })
}

// Enregistrement d'un avion
exports.createAvion = (req,res) => {
    // req.body : inona ?
    // console.log('Enregistrement',req.body);
    // affiche information depuis le formulaire

    let data = req.body;
    // console.log(data);

    const avionRequestData = new AvionModel(data);
    
    // console.log(Object.keys(req.body).length);
    
    // Vérification si clé de l'objet est null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0 ){
        res.status(400).send({success:false,message:"Veuillez remplir tous les chapms"});
    }
    else{
        console.log("Donnée validé");
        // console.log(avionRequestData);

        AvionModel.postAvion(avionRequestData,(err,avion) => {
            if(err){
                res.send(err);
            }
            else if(!err){
                res.json({status:true,message:'Avion enregistré avec succès',data:avion.insertId})
            }
        })
    }
}

// Modification d'un avion
exports.updateAvion = (req,res) => {
    let data = req.body;
    // console.log(data);
    const avionRequestData = new AvionModel(data);
    // Vérification si clé de l'objet est null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0 ){
        res.status(400).send({success:false,message:"Veuillez remplir tous les chapms"});
    }
    else{
        console.log("Donnée validé");
        // console.log(req.params.id);
        let id = req.params.id;
        AvionModel.putAvion(id,avionRequestData,(err,avion) => {
            if(err){
                res.send(err);
            }
            else if(!err){
                res.json({status:true,message:'Avion modifié avec succès'})
            }
        })
    }
}

// Suppression d'un avion
exports.deleteAvion = (req,res) => {
    let id = req.params.id;
    AvionModel.deleteAvion(id,(err,avion) => {
        if(err){
            res.send(err);
        }
        else if(!err){
            res.json({status:true,message:'Avion supprimé avec succès'});
        }
    })
}

