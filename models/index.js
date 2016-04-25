var orm = require('orm');
var transaction = require("orm-transaction");
var settings = require('../config/settings');
var connection = null;

function connectModels(db, cb) {

    require('./departments')(orm, db);
    require('./employees')(orm, db);

    db.sync(function(err){
        if (err) console.warn(err);
        else console.log("SCHEMAS CREATED");
    });

    return cb(null, db);
}

module.exports = function(cb) {
    if (connection) return cb(null, connection);

    orm.connect(settings.database, function(err, db) {
        if (err) return cb(err);
        db.use(transaction);

        connection = db;
        db.settings.set('instance.returnAllErrors', true);
        db.settings.set("connection.reconnect", true);
        db.settings.set("connection.pool", true);

        connectModels(db, cb);
    });
};