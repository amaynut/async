var redis = require('redis');
var client = redis.createClient();
var async = require('async');

var getKeys = function (callback) {
    client.keys("*", function (err, data) {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    });
};

var setTtl = function (keys, callback) {
    async.each(keys, function (key, each_cb) {
        client.ttl(key, function (err, ttl) {
            console.log("Key: " + key + " TTL: " + ttl);
            if (ttl < 0) {
                client.expire(key, 1111111)
            }
            each_cb();
        });

    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, 'DONE');
        }

    });

};
async.waterfall([getKeys, setTtl], function (err, data) {
    if (err) {
        console.error("Error: " + err)
    } else {
        console.log("Result: " + data);
    }
    process.exit()
});



