const dbConn = require('../database/db.config');

let Voyageur = function(voyageur){
    this.numVoyageur = voyageur.numVoyageur;
    this.nom = voyageur.nom;
}

Voyageur.getAllVoyageurs = (result) => {
    dbConn.query("SELECT * FROM voyageur",(err,res) => {
        if(err){
            console.log("Impossible de récupérer tous les listes des voyageurs");
            result(null,err);
        }
        result(null,res);
    })
}

Voyageur.getOneVoyageur = (id,result) => {
    dbConn.query("SELECT * FROM voyageur WHERE id = ?",id,(err,res) => {
        if(err){
            console.log("Impossible d'editer le voyageur");
            result(null,err);
        }
        result(null,res);
    })
}

Voyageur.getVoyageurByAvion = (voyageurTrier,result) => {
    // console.log(voyageurTrier);
    dbConn.query("SELECT voyageur.* FROM reservation INNER JOIN avion ON avion.id = reservation.numAvion INNER JOIN voyageur ON voyageur.id = reservation.numVoyageur WHERE avion.numAvion = ?",voyageurTrier,(err,res) => {
        if(err){
            console.log("Erreur sur le tri");
            result(null,err);
        }
        result(null,res);
    })
}

Voyageur.postVoyageur = (voyageurData,result) => {
    dbConn.query("INSERT INTO voyageur SET ?",voyageurData,(err,res) => {
        if(err){
            console.log("Echec d'enregistrement du voyageur");
            result(null,err);
        }
        result(null,res);
    });
}

Voyageur.putVoyageur = (id,voyageurData,result) => {
    // console.log(voyageurData.numVoyageur+"  "+id);

    dbConn.query("UPDATE voyageur SET numVoyageur=?,nom=? WHERE id= ?",[voyageurData.numVoyageur,voyageurData.nom,id],(err,res) => {
        if(err){
            console.log("Echec de modification du voyageur");
            result(null,err);
        }
        result(null,res);
        console.log("Voyageur modifié avec succès");
    })
}

Voyageur.deleteVoyageur = (id,result) => {
    dbConn.query("DELETE FROM voyageur WHERE id= ?",[id],(err,res) => {
        if(err){
            console.log("Echec de suppression du voyageur");
            result(null,err);
        }
        result(null,res);
        console.log("Voyageur supprimé avec succès");
    })
}

module.exports = Voyageur;

