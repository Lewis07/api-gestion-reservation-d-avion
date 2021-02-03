const express = require('express');
const router = express.Router();
const recetteController = require('../controllers/recette.controllers');

router.get('/',recetteController.sumFraisByAvion);
module.exports = router;