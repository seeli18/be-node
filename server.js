const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200",

  //   Access-Control-Allow-Headers:x-access-token
  // Access-Control-Allow-Methods:GET,PUT,POST,DELETE,OPTIONS
  // Access-Control-Allow-Origin:*
  // Access-Control-Expose-Headers:x-access-token
};


// app.all('*', function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Authorization, ZWAYSession, Content-Type, x-access-token');
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
//   res.setHeader('Access-Control-Max-Age', '1000');
//   next();
// })


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// database
const db = require("./app/models");
const Role = db.roles;

// db.sequelize.sync();
// // force: true will drop the table if it already exists

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

db.sequelize.sync().then(() => {
  console.log('Drop and Resync Database with { force: true }');
  // initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to basekt api."
  });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// AZZURRA
require('./app/routes/evento.route')(app);
require('./app/routes/gara.route')(app);
require('./app/routes/punteggio.route')(app);
require('./app/routes/disciplina.route')(app);
require('./app/routes/esercizio.route')(app);
require('./app/routes/atleta.route')(app);
require('./app/routes/societa.route')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}