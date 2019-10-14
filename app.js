const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/login', require('./routes/login').login);
app.post('/login', require('./routes/user').login);
app.get('/signup', require('./routes/login').signup);
app.post('/signup', require('./routes/user').signup);
app.get('/band', require('./routes/login').band);
app.post('/band', require('./routes/user').band);


app.listen(2222, ()=>{
    console.log("Server is started on port 2222");
});