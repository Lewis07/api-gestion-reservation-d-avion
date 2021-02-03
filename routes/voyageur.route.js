const express = require("express");
const router = express.Router();
const voyageurController = require("../controllers/voyageur.controller");

// Récupérer tous les listes des voyageurs
router.get('/',voyageurController.findAllVoyageur);
// router.get('/',(req,res) => {
//     res.send("Aiz e");
// });

// Récupérer un voyageur
router.get('/:id',voyageurController.findVoyageur);

// Enregistrement d'un voyageur
router.post('/',voyageurController.createVoyageur);

// Modification d'un voyageur
router.put('/:id',voyageurController.updateVoyageur);

// Suppression d'un voyageur
router.delete('/:id',voyageurController.deleteVoyageur);

module.exports = router;