const mongoose = require('mongoose');

//MLAB
mlabUser = 'developer';
mlabPass = 'default1';
mlabUrl = 'ds129045.mlab.com:29045/atena_db';
mlab = 'mongodb://'+mlabUser+':'+mlabPass+'@'+mlabUrl;

mongoose.connect(mlab, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;