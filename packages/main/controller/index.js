
module.exports = function(req ,res , fs){

	fs.open('dbms_credencial.json', 'r', function(err, fd) {
  		if (err) {
	    		if (err.code === 'ENOENT') {
	      			console.error('myfile does not exist');
	      			res.render('../packages/log/admin/view/page/dbmslogin.ejs')
				return;
	    		}

	    	throw err;
  		}else{

			var mysql = require('mysql');	
			var filename = 'dbms_credencial.json';
			fs.readFile(filename, function(err, data) {
				if (err) throw err;
				//var config = JSON.parse(data);
				var obj = JSON.parse(data);
				console.log(obj)
				var t = {
  					host : obj.host,
					user: obj.user,
					password: obj.password,
 					database: "new"
				}
				//console.log(t.host)
				var con = mysql.createConnection(t);

				con.connect(function(err) {
				if (err) throw err;
 					con.query("SELECT * FROM customers", function (err, data, fields) {
					if (err) throw err;
 					res.render('../packages/main/views/index.ejs' , {data:data})
  					});
				});
			});
	
 		}


	});

}
