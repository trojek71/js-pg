var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      GetData(function (recordSet) {
          res.render('index', {product: recordSet})
          console.log(recordSet);
      });
    });

    function GetData(callBack){
      var sql = require('mssql');
      var Config = {
        user: 'sa',
        password: '!tomek23',
        server: '192.168.66.189', 
        database: 'SynapticNew'
      };
      var conn = new sql.ConnectionPool(Config,function (err) {
         //If any error
         var request = new sql.Request(conn);
         request.query('SELECT * FROM dbo.u=UserInfo', function(err, recordSet){
           callBack(recordSet);
         });
      });
    }

    module.exports = router;