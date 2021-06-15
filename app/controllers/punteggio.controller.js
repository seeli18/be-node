const db = require("../models");
const Punteggio = db.punteggio;
const User = db.users;
const Evento = db.evento;
const Disciplina = db.disciplina;
const Gara = db.gara;
const Esercizio = db.esercizio;
const Atleta = db.atleta;
const Op = db.Sequelize.Op;


exports.creaPunteggio = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyPunteggio = {
    difficolta: req.body.difficolta,
    penalita: req.body.penalita,
    esecuzione: req.body.esecuzione,
    totalePunti: req.body.totalePunti,
    garaId: req.body.garaId,
    esercizioId: req.body.esercizioId,
    codiceFiscale: req.body.codiceFiscale

  };


  // req.user.createGiocatore(Giocatore)
  Punteggio.create(bodyPunteggio)
    .then(data => {

      console.log("ciao");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
//GET - ALL
exports.getPunteggi = (req, res, next) => {
  console.log("zioooo mariooooo");
  Punteggio.findAll(
    {
      include: Esercizio
      //  [{
      //   model: Gara
      // },
      // {
      //   model: Esercizio
      // },
      // {
      //   model: Atleta
      // }]
    }
    )

    // Giocatore.findAll({include: [{ model : User, attributes : ['id','username','updatedAt']}]})
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
    .then(punteggio => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("GIOCATORI: ", punteggio);
      res.json(punteggio);
      // res.json({ players : players});
    }).catch(
      err => console.log(err)
    );
};


exports.searchPost = (req, res, next) => {
  const title = '%' + req.query.title + '%';
  Post.findAll({
    where: {
      title: {
        [Op.like]: title
      }
    }
  }).then((posts) => {
    console.log(posts);
    res.json({
      posts: posts
    })
  }).catch(
    err => console.log(err)
  );
};


//GET - ALL
exports.getAtletiFIlterByPunteggio = (req, res, next) => {
  const query = req.query.totalePunti;
  // const query = query.param;
  console.log("zioooo mariooooo");
  console.log("nomeDisciplina: ", query);
  Punteggio.findAll(    { where: { totalePunti: query }},

      {
        include: [
          {
            model: Gara            
          },
          {
            model: Atleta
          }
        ]
      }


    )

    // Giocatore.findAll({include: [{ model : User, attributes : ['id','username','updatedAt']}]})
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
    .then(gara => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("GIOCATORI: ", gara);
      res.json(gara);
      // res.json({ players : players});
    }).catch(
      err => console.log(err)
    );
};