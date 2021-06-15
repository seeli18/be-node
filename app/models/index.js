const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    define: {
      //https://sequelize.org/master/manual/model-basics.html
      freezeTableName: true //Enforcing the table name to be equal to the model name
    },
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Carico i modelli relativi alla base dati
db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("../models/role.model.js")(sequelize, Sequelize);

//AZZURRA
db.evento = require("./evento.model.js")(sequelize, Sequelize);
db.punteggio = require("./punteggio.model.js")(sequelize, Sequelize);
db.gara = require("./gara.model.js")(sequelize, Sequelize);
db.disciplina = require("./disciplina.model.js")(sequelize, Sequelize);
db.esercizio = require("./esercizio.model.js")(sequelize, Sequelize);
db.atleta = require("./atleta.model.js")(sequelize, Sequelize);
db.societa = require("./societa.model.js")(sequelize, Sequelize);



// -----------------------------------------------------------

db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});




// N:N una partita ha molte squadre tramite punteggio
db.gara.belongsToMany(db.esercizio, {
  through: db.punteggio,
  foreignKey: "garaId",
  otherKey: "esercizioId"
});
// N:N una squadre ha molte partite tramite punteggio
db.esercizio.belongsToMany(db.gara, {
  through: db.punteggio,
  foreignKey: "esercizioId",
  otherKey: "garaId"
});




// N:N una partita ha molte squadre tramite punteggio
db.evento.belongsToMany(db.disciplina, {
  through: db.gara,
  foreignKey: "eventoId",
  otherKey: "disciplinaId"
});
// N:N una squadre ha molte partite tramite punteggio
db.disciplina.belongsToMany(db.evento, {
  through: db.gara,
  foreignKey: "disciplinaId",
  otherKey: "eventoId"
});

// //1:N
db.evento.hasMany(db.gara);
db.gara.belongsTo(db.evento);

// //1:N
db.disciplina.hasMany(db.gara);
db.gara.belongsTo(db.disciplina);





// db["Company"].hasMany(db["Department"], { foreignKey: 'companyId'});
// db["Department"].belongsTo(db["Company"], {foreignKey: 'companyId'});
// //1:N
db.atleta.hasMany(db.punteggio, { foreignKey: 'codiceFiscale'});
db.punteggio.belongsTo(db.atleta, { foreignKey: 'codiceFiscale'});

db.gara.hasMany(db.punteggio, { foreignKey: 'garaId'});
db.punteggio.belongsTo(db.gara, { foreignKey: 'garaId'});


// db.atleta.hasMany(db.punteggio);
// db.punteggio.belongsTo(db.atleta);


// //1:N
db.societa.hasMany(db.atleta, { foreignKey: 'societaId'});
db.atleta.belongsTo(db.societa, { foreignKey: 'societaId'});




// -----------------------------------------------------------

// -----------------------------------------------------------

// // 1:N un partita ha molti biglietti
// db.partita.hasMany(db.biglietto);
//   // , { as: "biglietti" });

// // // N:1 un biglietto ha molte partite
// db.biglietto.belongsTo(db.partita, {as: 'role'})




// -----------------------------------------------------------







db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
