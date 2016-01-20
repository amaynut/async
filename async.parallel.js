var async = require('async');


var stack = [];

var firstFunction = function (callback) {
    // do whatever we want here
    callback(null, "First function results");
}

var secondFunction = function (callback) {
    // do whatever we want here
    try{
        var mistake = 25 * test
        callback(null, "Second function results");
    }catch (e){
        callback(e)
    }

}

var thirdFunction = function (callback) {
    // do whatever we want here
    callback(null, "Third function results");
}

var fourthFunction = function (callback) {
    // do whatever we want here
    callback(null, "Fourth function results");
}

stack.push(firstFunction);
stack.push(secondFunction);
stack.push(thirdFunction);
stack.push(fourthFunction);

async.parallel(stack, function (err, result) {
    if(err){
      console.error("There was an error: "+ err)
    }else{
        console.log(result)
    }
})

var tasks = {};

tasks.getUserName = function (callback) {
    callback(null, 'Amaynut');
};
tasks.getPassword = function (callback) {
   callback(null, 'asdwedwedfe354wqedwsdXFSA');
};

tasks.getAddress = function (callback) {
    callback(null, '5-4151 Rue Jean Rivard, Montreal, QA, Canada')
};

async.parallel(tasks, function (err, data) {
    console.log(data);
})