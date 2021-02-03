const ReservationModel = require('../models/reservation.model');

exports.findAllReservation = (req,res) => {
    ReservationModel.getAllReservation( (err,reservations) => {
        if(err) res.send(err);
        res.send(reservations);
    })
}

exports.findReservation = (req,res) => {
    let id = req.params.id;
    ReservationModel.getOneReservation( id,(err,reservation) => {
        if(err) res.send(err);
        res.send(reservation);
    })
}

exports.createReservation = (req,res) => {
    let data = req.body;
    let reservationData = new ReservationModel(data);
    // console.log(reservationData);
    if(data.constructor === Object  && Object(data).keys.length === 0){
        res.status(400).send({status:false,message:"Echec de l'enregistrement du réservation"});
    }
    else{
        ReservationModel.postReservation( reservationData,(err,reservation) => {
            console.log("Donnée validé");
            if(err) res.send(err);
            else if(!err){
                res.json({status:true,message:"Reservation ajouté avec succès"});
            }
        })
    }
}

exports.updateReservation = (req,res) => {
    let data = req.body;
    let reservationData = new ReservationModel(data);
    // console.log(id+" "+reservationData.frais);
    
    if(data.constructor === Object  && Object.keys(data).length === 0){
        res.status(400).send({status:false,message:"Echec de modification du réservation"});
    }
    else{
        console.log("Donnée validé");
        let id = req.params.id;
        ReservationModel.putReservation(id,reservationData,(err,reservation) => {
            if(err) res.send(err);
            else if(!err){
                res.json({status:true,message:"Reservation modifié avec succès"});
            }
        })
    }
}

exports.deleteReservation = (req,res) => {
    let id = req.params.id;
    ReservationModel.deleteReservation(id,(err,reservation) => {
        if(err) res.send(err);
        else if(!err){
            res.json({status:true,message:"Reservation supprimé avec succès"});
        } 
    })
}