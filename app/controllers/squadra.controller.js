const { squadra } = require("../models");
const db = require("../models");
const Squadra = db.squadra;
const User = db.users;
const Op = db.Sequelize.Op;


exports.creaSquadra = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodySquadra = {
    nome: req.body.nome,
    anno: req.body.anno,
    allenatore: req.body.allenatore,
  };


 // req.user.createGiocatore(Giocatore)
  Squadra.create(bodySquadra)
    .then(data => {

      console.log("Hello!!!");
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
exports.getSquadra = (req,res,next) => {
  Squadra.findAll()
  // .then(players => { 
  //     promises = [];
  //     players.forEach(p => {
  //         const postWithLike = Like.count({ where: { postId: p.id } })
  //             .then(likes => {
  //                 p.dataValues.likes = likes;
  //                 return p;
  //         });
  //         promises.push(postWithLike);
  //     });
  //     return Promise.all(promises);
  // })
  .then(squadra => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log(squadra);
      res.json(squadra);
      // res.json({ players : players});
  }).catch(
      err => console.log(err)
  );
};


