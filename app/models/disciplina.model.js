module.exports = (sequelize, Sequelize) => {
  const Disciplina = sequelize.define("disciplina", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nomeDisciplina: {
      type: Sequelize.STRING
    }

  });

  return Disciplina;
};
