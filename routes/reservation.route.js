const express = require("express");
const router = express.Router();
const ReservationController = require("../controllers/reservation.controller");

router.get('/',ReservationController.findAllReservation);
router.get('/:id',ReservationController.findReservation);
router.post('/',ReservationController.createReservation);
router.put('/:id',ReservationController.updateReservation);
router.delete('/:id',ReservationController.deleteReservation);

module.exports = router;