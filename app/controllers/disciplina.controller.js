const db = require("../models");
const Disciplina = db.disciplina;
const Op = db.Sequelize.Op;


exports.creaDisciplina = (req, res) => {
  // Validate request
  if (!req.body.nomeDisciplina) {
    res.status(400).send({
      message: "Inserire nome disciplina!"
    });
    return;
  }

  // Crea una disciplina
  const bodyDisciplina = {
    nomeDisciplina: req.body.nomeDisciplina
  };

  Disciplina.create(bodyDisciplina)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Qualcosa non sta funzionado nel creare una disciplina!"
      });
    });
};

//GET - ALL 
exports.getDiscipline = (req,res,next) => {
  Disciplina.findAll()
  .then(discipline => {  
         res.json(discipline);
  }).catch(
      err => console.log(err)
  );
};


exports.searchDisciplina = (req,res,next) => {
  const query = req.query
  console.log("query: ", req.query);
  Disciplina.findAll({ where: query })
  .then(discipline => {
      console.log("DISCIPLINE: ", discipline);   
         res.json(discipline);
  }).catch(
      err => console.log(err)
  );
};



