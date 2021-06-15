const { authJwt } = require("../middleware");
const societaController = require("../controllers/societa.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/societa",
    // [authJwt.verifyToken, authJwt.isAdmin],
    societaController.creaSocieta
  );

  app.get(
    "/api/lista/societa",
    // [authJwt.verifyToken, authJwt.isAdmin],
    societaController.getSocieta
  );

  // app.get(
  //   "/api/lista/gare/eventi/filterbydisciplina",
  //   // [authJwt.verifyToken, authJwt.isAdmin],
  //   garaController.getFilterByDisciplina
  // );
};
