export default (sequelize, Sequelize) => {
    const gameModel = sequelize.define("game", {
      titulo: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      jogadores_rec: {
        type: Sequelize.STRING,
      },
      idade_rec: {
        type: Sequelize.STRING,
      },
    });
  
    return gameModel;
  };
  