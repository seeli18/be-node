const { authJwt } = require("../middleware");
const eventoController = require("../controllers/evento.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/evento",
    // [authJwt.verifyToken, authJwt.isAdmin],
    eventoController.creaEvento
  );

  app.get(
    "/api/lista/evento",
    // [authJwt.verifyToken, authJwt.isAdmin],
    eventoController.getEvento
  );
};
