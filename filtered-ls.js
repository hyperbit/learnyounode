var fs = require("fs");

fs.readdir(process.argv[2], function(err, list){
    for(item in list){
        var ext = list[item].split('.')[1];
        if(process.argv[3] == ext)
            console.log(list[item]);
    }
});
