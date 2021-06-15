const { authJwt } = require("../middleware");
const atletaController = require("../controllers/atleta.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/atleta",
    // [authJwt.verifyToken, authJwt.isAdmin],
    atletaController.creaAtleta
  );

  app.get(
    "/api/lista/atleti",
    // [authJwt.verifyToken, authJwt.isAdmin],
    atletaController.getAtleti
  );

  // app.get(
  //   "/api/lista/gare/eventi/filterbydisciplina",
  //   // [authJwt.verifyToken, authJwt.isAdmin],
  //   garaController.getFilterByDisciplina
  // );
};
