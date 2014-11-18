module.exports = function(dir, filter, callback) {
    var fs = require("fs");
    var files = [];

    fs.readdir(dir, function(err, list){
        if (err) return callback(err);
        for(item in list){
            var ext = list[item].split('.')[1];
            if(filter == ext)
                files.push(list[item]);
        }
    return callback(err,files);
    });
};
