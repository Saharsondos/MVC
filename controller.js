const { response } = require("express");
const express = require("express")
const app = express();


//initialiserer handlebars
const exphbs = require("express-handlebars");

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended: true}))

//sætter hbs op
app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs"
}));

//sætte view
app.set("view engine", ".hbs")

//initialiserer noget fra datamodel (models)
const Books = require("./models/books");
const { request } = require("http");

//serve vores filer?
app.get('/', (request, response, next) =>{
    response.render("index", {person: "Sahar", books: Books.books})
})

app.post("/add", (request, response, next) => {
    console.log(request.body);
    Books.books.push(request.body);
    response.redirect('/');
})

//starte server
app.listen(8080, () => {
    console.log("server started on http://localhost:8080")
})