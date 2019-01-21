module.exports = function(req ,res , fs){

	var data = req.body;
			
	var mysql = require('mysql');

	var con = mysql.createConnection({
		  host: data.host_name,
		  user: data.user_name,
		  password: data.password
	});
	con.connect(function(err) {
		  if (err){
			res.status(400).send({
        	        	        result: "wrong"
				});
		  	return;
	}else{

		con.query("CREATE DATABASE IF NOT EXISTS hospitalDb", function (err, result) {
    			if (err){
				res.status(400).send({
        	        	        result: "not created"
				});
		  		return;
			}else{
	    			console.log("Database created");
				console.log("Connected!");
				fs.open('dbms_credencial.json', 'r', function(err, fd) {
  				if (err) {
					if (err.code === 'ENOENT') {
				        	console.error('myfile does not exist , creating New');
						var createStream = fs.createWriteStream('dbms_credencial.json');
						createStream.end();
						var wstream = fs.createWriteStream('dbms_credencial.json');
						var host = '{"host": "'+data.host_name+'",\n"user": "'+data.user_name+'",\n"password" : "'+data.password + '"}';
						wstream.write(host);		
						wstream.end();
	
						res.status(200).send({
        		        		        result: "yes"
						});	
						return;					
		
					}			
 						throw err;
					}
				});
	
			}

  		});

	}
	});
}
