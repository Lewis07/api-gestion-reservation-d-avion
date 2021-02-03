const VoyageurModel = require('../models/voyageur.model');

exports.findAllVoyageur = (req,res) => {
    VoyageurModel.getAllVoyageurs( (error,voyageurs) => {
        if(error) res.send(error);
        // console.log(voyageurs);
        res.send(voyageurs);
    })
}

exports.findVoyageur = (req,res) => {
    let id = req.params.id;
    VoyageurModel.getOneVoyageur(id,(err,voyageur) => {
        if(err) res.send(err);
        res.send(voyageur);
    }) 
}

exports.createVoyageur = (req,res) => {
    let data = req.body;
    const voyageurData = new VoyageurModel(data);

    if(data.constructor === Object && Object.keys(data).length === 0){
        res.status(400).send({status:false,message:"Echec de l'enregistrement de voyageur"});
    }
    else{
        console.log("Donnée validé");
        VoyageurModel.postVoyageur(voyageurData,(err,voyageur) => {
            if(err){
                res.send(err);
            }
            else if(!err){
                res.json({status:true,message:"Voyageur enregistré avec succès"});
            }
        })
    }
}

exports.updateVoyageur = (req,res) => {
    let data = req.body;
    let voyageurData = new VoyageurModel(data);
    // console.log(voyageurData);

    if(data.constructor === Object && Object.keys(data).length === 0){
        res.status(400).send({status:false,message:"Echec de la modification du voyageur"});
    }
    else{
        console.log("Donnée validé");
        let id = req.params.id;
        VoyageurModel.putVoyageur(id,voyageurData,(err,voyageur) => {
            if(err){
                res.send(err);
            }
            else if(!err){
                res.json({status:true,message:"Voyageur modifié avec succès"});
            }
        })
    }
}

exports.deleteVoyageur = (req,res) => {
    let id = req.params.id;
    VoyageurModel.deleteVoyageur(id,(err,voyageur) => {
        if(err){
            res.send(err);
        }
        else if(!err){
            res.json({status:true,message:"Voyageur supprimé avec succès"});
        }
    })
}

// Tri des voyageurs par avion
exports.triAvion = (req,res) => {
    let data = req.params.numAvion;
    console.log(data);
}