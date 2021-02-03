let conn = require('../database/db.config');
let Recette = function(recette){
    this.numAvion = recette.numAvion;
    this.yearReservation = recette.yearReservation;
    this.monthReservation = recette.monthReservation;
}

Recette.countRecette = function(recetteData,result){
    console.log(recetteData);
    /*conn.query("SELECT SUM(frais) as recette FROM reservation INNER JOIN avion on avion.id = reservation.numAvion WHERE YEAR(reservation.dateReservation) = ? OR(reservation.dateReservation)= ? AND avion.numAvion= ? GROUP BY avion.numAvion",[recetteData.yearReservation,recetteData.monthReservation,recetteData.numAvion],(err,res) => {
        if(err){
            console.log("Impossible d'obtenir la somme des frais par cet avion",err);
            result(null,err);
        }
        result(null,res);
    })*/
}