const mysql = require('mysql');

// Connection
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'lewis',
    password : 'lewis',
    database : 'reservation'
});

conn.connect(function(error){
    // if(error) throw error;
    if(error) console.log("Echec de la connexion à la base de donnée"); 
    if(!error) console.log('Connecté à la base de donnée');
});

module.exports = conn;