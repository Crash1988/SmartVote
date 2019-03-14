// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const app = express();
    let port = process.env.PORT || 4000;

    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('./DB/testDBb');

    db.serialize(function () {
      // db.run('CREATE TABLE lorem (info TEXT)');
      // var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

      // for (var i = 0; i < 10; i++) {
      //   stmt.run('Ipsum ' + i)
      // }

      // stmt.finalize();

      db.each('SELECT * from Teams ', function (err, row) {
        console.log(row);
      });
    });

    db.close();

    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });
