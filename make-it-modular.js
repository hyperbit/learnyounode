var ls = require('./make-it-modular-filtered-ls');

ls(process.argv[2], process.argv[3], function(err,list) {
	if(err) {
		console.log(err);
	} else {
        for(item in list)
            console.log(list[item]);
    }
});
