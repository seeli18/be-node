module.exports = (sequelize, Sequelize) => {
  const Atleta = sequelize.define("atleta", {
    codiceFiscale: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING
    },
    cognome: {
      type: Sequelize.STRING
    }

  });

  return Atleta;
};