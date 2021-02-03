const recetteModel = require('../models/recette.model');

exports.sumFraisByAvion = (req,res) => {

    let data = req.body;
    console.log(data);
    
    //let recetteData = new recetteModel(data);
    //console.log(recetteData);
    /*recetteModel.sumFraisByAvion(recetteData,(err,recette) => {
        if(err) res.send(err);
        else if(!err){
            res.json({status:true,message:"Recette par avion recupéré avec succès"});
        }
    })*/
}