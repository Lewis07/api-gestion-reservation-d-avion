const express = require("express");
const bodyParser = require("body-parser");

// Créer un application express
const app = express();
// Port du serveur
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// convertir type de contenu du donnée de requête en application json
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE");
        return res.status(200).json({});
    }
    next();
});

const avionRoutes = require('./routes/avion.route');
const voyageurRoutes = require('./routes/voyageur.route');
const reservationRoutes = require('./routes/reservation.route');
const triRoutes = require('./routes/triVoyageur.route');
const recetteRoutes = require('./routes/recette.route');

// Route des applications
app.use('/api/avions',avionRoutes);
app.use('/api/voyageurs',voyageurRoutes);
app.use('/api/reservations',reservationRoutes);
app.use('/api/tri',triRoutes);
app.use('/api/recette',recetteRoutes);

app.listen(port,() => {
    console.log(`Le serveur écoute sur le port ${port}`);
});




