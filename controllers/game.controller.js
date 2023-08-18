import db from "../models/index.js";

const Game = db.game;

const Op = db.Sequelize.Op;

class gameControllers {
  //create
  static create = async (req, res) => {
    if (!req.body.titulo)
      return res.status(400).send({ message: "O campo Título é obrigatório" });

    if (!req.body.descricao)
      return res
        .status(400)
        .send({ message: "O campo Descrição é obrigatório" });

    if (!req.body.jogadores_rec)
      return res
        .status(400)
        .send({ message: "O campo Jogadores Recomendados é obrigatório" });

    if (!req.body.idade_rec)
      return res
        .status(400)
        .send({ message: "O campo Idade Recomendada é obrigatório" });

    try {
      const response = await Game.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        jogadores_rec: req.body.jogadores_rec,
        idade_rec: req.body.idade_rec,
      });
      return res.status(201).send(response.dataValues);
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message || "Erro ao cadastrar o jogo" });
    }
  };
  //find All
  static findAll = async (req, res) => {
    const titulo = req.query.titulo;

    let condition = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : null;

    try {
      await Game.findAll({ where: condition }).then((data) => {
        return res.status(200).send(data);
      });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };

  //find One
  static findOne = async (req, res) => {
    const id = req.params.id;

    try {
      const response = await Game.findByPk(id);

      return res.status(200).send(response.dataValues);
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };
  //update
  static update = async (req, res) => {
    const id = req.params.id;

    try {
      const occ = await Game.update(req.body, {
        where: { id: id },
      });
      if (occ == 1)
        return res
          .status(200)
          .send({ message: "Jogo atualizado com sucesso!" });
    } catch (err) {
      return res
        .status(400)
        .send({ message: "Não foi possível atualizar as informações jogo." });
    }
  };
  //delete
  static delete = async (req, res) => {
    const id = req.params.id;
    try {
      const game = await Game.findByPk(id);

      if (!game)
        return res.status(404).send({ message: "Jogo não encontrado" });

      await game.destroy();
      return res.status(200).send({ message: "Jogo deletado com sucesso" });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  };
}

export default gameControllers;
