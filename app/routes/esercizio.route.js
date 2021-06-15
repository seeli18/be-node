const { authJwt } = require("../middleware");
const esercizioController = require("../controllers/esercizio.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/esercizio",
    // [authJwt.verifyToken, authJwt.isAdmin],
    esercizioController.creaEsercizio
  );

  app.get(
    "/api/lista/esercizi",
    // [authJwt.verifyToken, authJwt.isAdmin],
    esercizioController.getEsercizi
  );

  // app.get(
  //   "/api/lista/gare/eventi/filterbydisciplina",
  //   // [authJwt.verifyToken, authJwt.isAdmin],
  //   garaController.getFilterByDisciplina
  // );
};
