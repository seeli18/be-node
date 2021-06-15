const db = require("../models");
const Atleta = db.atleta;
const User = db.users;
const Op = db.Sequelize.Op;


exports.creaAtleta = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyAtleta = {

    codiceFiscale: req.body.codiceFiscale,
    nome: req.body.nome,
    cognome: req.body.cognome

  };


  console.log("bodyAtleta: ", bodyAtleta);

  // req.user.createGiocatore(Giocatore)
  Atleta.create(bodyAtleta)
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
exports.getAtleti = (req, res, next) => {
  console.log("zioooo mariooooo");
  Atleta.findAll(
      // {
      //   include: [
      //     {
      //     model: Evento
      //   },
      //   {
      //     model: Disciplina
      //   }]
      //  }
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
    .then(Atleta => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("GIOCATORI: ", Atleta);
      res.json(Atleta);
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
exports.getFilterByDisciplina = (req, res, next) => {
  const query = req.query.nomeDisciplina;
  // const query = query.param;
  console.log("zioooo mariooooo");
  console.log("nomeDisciplina: ", query);
  Gara.findAll(

      {
        include: [{
            model: Disciplina,
            where: {
              nomeDisciplina: query
              // query
            },

            // "nomeDisciplina": "salto in alto",

          },
          {
            model: Evento
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