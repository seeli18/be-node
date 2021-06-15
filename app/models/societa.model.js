module.exports = (sequelize, Sequelize) => {
  const Societa = sequelize.define("societa", {
    nomeSocieta: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    numeroAtleti: {
      type: Sequelize.STRING
    }

  });

  return Societa;
};
