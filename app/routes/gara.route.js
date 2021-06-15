const { authJwt } = require("../middleware");
const garaController = require("../controllers/gara.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/gara",
    // [authJwt.verifyToken, authJwt.isAdmin],
    garaController.creaGara
  );

  app.get(
    "/api/lista/gare",
    // [authJwt.verifyToken, authJwt.isAdmin],
    garaController.getGare
  );

  app.get(
    "/api/lista/gare/eventi/filterbydisciplina",
    // [authJwt.verifyToken, authJwt.isAdmin],
    garaController.getFilterByDisciplina
  );
};
