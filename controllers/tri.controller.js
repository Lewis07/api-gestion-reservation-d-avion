const voyageurModel = require('../models/voyageur.model');

// Tri des voyageurs par avion
exports.triAvion = (req,res) => {
    let data = req.params.numAvion;
    // console.log(data);
    voyageurModel.getVoyageurByAvion( data,(error,tri) => {
        if(error) res.send(error);
        res.send(tri);
    })
}