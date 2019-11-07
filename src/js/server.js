const express = require('express');
const app = express();
const http = require('http');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    const  config = {
        user: 'sa',
        password: '!tomek23',
        server: '192.168.66.189', 
        database: 'SynapticNew' 
    };

    


        
    // connect to your database
    sql.connect(config, function (err) {
        
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select Name,Created from UserInfo', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
           //res.json(recordset);
           res.json(recordset);
           
           
           

            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running.. on localhost port 5000');
});
