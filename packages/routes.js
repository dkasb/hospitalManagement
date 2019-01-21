
module.exports = function(app ,fs){
//const fs = require('fs');
app.get('/', function(req , res ){
require('./main/controller/index')(req , res ,fs)
})


app.post('/DBlogin', function(req , res ){

require('./log/admin/model/DBlogin')(req , res , fs)
})

}

