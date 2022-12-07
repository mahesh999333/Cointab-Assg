const express = require('express');
const mysql = require('mysql2');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const route = require('./route')

app.use(express.json())
app.use(cors())
app.use('/', route);


const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "9518547379#m",
    database: "cointab"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});



app.listen(9000, () => {
    console.log('server is running on 9000')
});