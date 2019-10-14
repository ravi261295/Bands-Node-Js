const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: "mypass",
    database: 'mytestdb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

exports.login = function(req, res){
    var email=req.body.email;
    var password=req.body.password;
    var sql = "SELECT * FROM Register WHERE email = `"+email+"` AND password = `"+password+"`";
    res.redirect('band');
}

exports.signup = function(req, res){
    var Name=req.body.name;
    var dob=req.body.dob;
    var email=req.body.email;
    var company=req.body.company;
    var password=req.body.password;
    var sql = "INSERT INTO Register (name, DoB, email, college_company, password) VALUES ('"+Name+"','"+dob+"','"+email+"','"+company+"','"+password+"')";
    connection.query(
        sql,function(err, results){
            if(err){
            console.error(err);
            }
            else{
                console.log("Data inserted successfully!!");
                res.redirect('login');
            }
        }
    )
}


exports.band = function(req, res){
    //name = '';
    Name = req.body.bandName;
    var sql = "INSERT INTO Band (bandName) VALUES ('"+Name+"')";
    connection.query(
        sql,function(err, results){
            if(err){
                console.error(err);
            }
            else{
                console.log("Band name inserted successfully!!");
            }
        }
    )
    res.render("band.ejs");
}
