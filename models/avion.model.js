let dbConn = require('../database/db.config');

// Constructeur (don't do in arrow function)
let Avion = function(avion){
    this.numAvion = avion.numAvion;
    this.design = avion.design;
    this.itineraire = avion.itineraire;
}

// Récupérer liste des avions
Avion.getAllAvions = (result) => {
    dbConn.query('SELECT * FROM avion',(err,res) => {
        // SELECT * FROM `reservation` INNER JOIN avion ON avion.numAvion = reservation.numAvion INNER JOIN voyageur ON voyageur.numVoyageur = voyageur.numVoyageur 
        if(err){
            console.log('Impossible de récupérer tous les listes des avions',err);
            result(null,err);
        }
        // console.log('Liste des avions');
        result(null,res);
    })
}

// Récupérer un avion
Avion.getOneAvion = (id,result) => {
    dbConn.query('SELECT * FROM avion WHERE id = ?',id,(err,res) => {
        if(err){
            console.log("Erreur lors de la récupération de l'id",err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    })
} 


// Enregistrement d'un avion
Avion.postAvion = (avionData,result) => {
    // console.log(avionData);

    dbConn.query('INSERT INTO avion SET ?',avionData,(err,res) => {
        if(err){
            console.log("Echec de l'enregistrement de l'avion");
            result(null,{status:false,message:err});
        }
        else if(!err){
            console.log("avion enregistré avec succès");
            result(null,{status:true,message:"avion enregistré avec succèssss",insertId:res.id});
        }
    })
}

// Modification d'un avion
Avion.putAvion = (id,avionData,result) => {
    // console.log(id+" "+avionData.numAvion);
    // console.log(result);

    dbConn.query("UPDATE `avion` SET `numAvion`= ?,`design`= ?,`itineraire`= ? WHERE id = ?",[avionData.numAvion,avionData.design,avionData.itineraire,id],(err,res) => {
        if(err){
            console.log("Echec du modification de l'avion");
            result(null,err);
        }
        else if(!err){
            console.log("Avion modifié avec succès");
            result(null,res);
        }
    })
}

// Suppression d'un avion
Avion.deleteAvion = (id,result) => {
    dbConn.query("DELETE FROM avion WHERE id= ?",[id],(err,res) => {
        if(err){
            console.log("Echec de suppression de l'avion");
            result(null,err);
        }
        else if(!err){
            console.log("Avion supprimé avec succès");
            result(null,res);
        }
    });
}

module.exports = Avion;