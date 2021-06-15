module.exports = (sequelize, Sequelize) => {
  const Evento = sequelize.define("evento", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    regione: {
      type: Sequelize.STRING
    },
    citta: {
      type: Sequelize.STRING
    },
    fase: {
      type: Sequelize.STRING
    },
    data: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  });

  return Evento;
};
