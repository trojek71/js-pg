const express = require('express');
const router = express.Router();
const config = require('./dbconfig');
const sql = require('mssql');
const app = express();

// Get homepage
router.get('/', function(req, res) {    

  // Read data rows from the database (dbo.lendbook table)
  new sql.ConnectionPool(config).connect().then(pool => {
    return pool.query `select Name,Created from UserInfo`
}).then(result => {

    res.render('index', {
        rows: result.recordset
    });

}).catch(err => {
    console.log(err);
});
});
var server = app.listen(5000, function () {
    console.log('Server is running.. on localhost port 5000');
});