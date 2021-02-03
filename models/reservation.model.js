const dbConn = require('../database/db.config');

let Reservation = function(reservation){
    this.numAvion = reservation.numAvion;
    this.numVoyageur = reservation.numVoyageur;
    this.dateReservation = reservation.dateReservation;
    this.frais = reservation.frais;
} 

Reservation.getAllReservation = (result) => {
    dbConn.query("SELECT reservation.*,(reservation.id) AS idReservation,avion.*,voyageur.* FROM `reservation` INNER JOIN avion ON avion.id = reservation.numAvion INNER JOIN voyageur ON voyageur.id = reservation.numVoyageur",(err,res) => {
        if(err){
            console.log("Impossible de récupérer tous les listes des résérvations");
            result(null,err);
        }
        result(null,res);
    })
}

Reservation.getOneReservation = (id,result) => {
    dbConn.query("SELECT * FROM reservation WHERE id = ?",id,(err,res) => {
        if(err){
            console.log("Impossible d'editer la réservation");
            result(null,err);
        }
        result(null,res);
    })
}

Reservation.postReservation = (reservationData,result) => {
    dbConn.query("INSERT INTO reservation SET ?",reservationData,(err,res) => {
        if(err){
            console.log("Echec d'enregistrement du réservation");
            result(null,err);
        }
        result(null,res);
    })
}

Reservation.putReservation = (id,reservationData,result) => {
    // console.log(id+"  "+reservationData.nom);
    dbConn.query("UPDATE reservation SET numAvion=?,numVoyageur=?,dateReservation=?,frais=?",[reservationData.numAvion,reservationData.numVoyageur,reservationData.dateReservation,reservationData.frais,id],(err,res) => {
        if(err){
            console.log("Echec de modification du réservation");
            result(null,err);
        }
        result(null,res);
    })
}

Reservation.deleteReservation = (id,result) => {
    dbConn.query("DELETE FROM reservation WHERE id=?",[id],(err,res) => {
        if(err){
            console.log("Echec de suppression du réservation");
            result(null,err);
        }
        result(null,res);
    })
}

module.exports = Reservation;

