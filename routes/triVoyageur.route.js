const express = require("express");
const router = express.Router();
const triController = require("../controllers/tri.controller");

// Visualisation des voyageurs par avion
router.get('/:numAvion',triController.triAvion);

module.exports = router;