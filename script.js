const express = require('express')
const app = express()

app.set("view engine", "ejs");

// app.use(function (req, res, next) {
//     // res.send("Hello form Middleware");
//     console.log("Hello from Middleware");
//     next();
// })


app.get('/', function (req, res) {
    res.render("index")
})
app.get('/profile', function (req, res) {
    res.send('Hello From Profile')
})

app.get('/profile/:username/:country', function (req, res) {
    // console.log(req.params);
    res.send(`Hello from ${req.params.username}, I know you are from ${req.params.country}`)
})

app.listen(3000)