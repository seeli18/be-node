const { authJwt } = require("../middleware");
const disciplinaController = require("../controllers/disciplina.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/disciplina",
    // [authJwt.verifyToken, authJwt.isAdmin],
    disciplinaController.creaDisciplina
  );

  app.get(
    "/api/lista/disciplina",
    // [authJwt.verifyToken, authJwt.isAdmin],
    disciplinaController.getDiscipline
  );


  //http://localhost:3000/api/lista/discipline?disciplina=salto
  app.get(
    `/api/cerca/disciplina`,
    // [authJwt.verifyToken, authJwt.isAdmin],
    disciplinaController.searchDisciplina
  );

};
