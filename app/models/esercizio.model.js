module.exports = (sequelize, Sequelize) => {
  const Esercizio = sequelize.define("esercizio", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    specialita: {
      type: Sequelize.STRING
    }

  });

  return Esercizio;
};
