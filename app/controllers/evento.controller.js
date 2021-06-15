const db = require("../models");
const Evento = db.evento;
const User = db.users;
const Op = db.Sequelize.Op;


exports.creaEvento = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyEvento = {
    regione: req.body.regione,
    citta: req.body.citta,
    fase: req.body.fase,
    data: req.body.data
  };


  // req.user.createGiocatore(Giocatore)
  Evento.create(bodyEvento)
    .then(data => {

      console.log("ciao");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
//GET - ALL
exports.getEvento = (req,res,next) => {
  Evento.findAll()
  .then(evento => { 
         res.json(evento);
  }).catch(
      err => console.log(err)
  );
};


