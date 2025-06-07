// controllers/atividadesController.js

const atividadesModel = require("../models/atividadesModel");

const getAllAtividades = async (req, res) => {
  try {
    const atividades = await atividadesModel.getAllAtividades();
    res.status(200).json(atividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAtividadesById = async (req, res) => {
  try {
    const atividades = await atividadesModel.getAtividadesById(req.params.id);
    if (atividades) {
      res.status(200).json(atividades);
    } else {
      res.status(404).json({ error: "Atividade não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAtividadesToDo = async (req, res) => {
  try {
    const atividades = await atividadesModel.getAtividadesToDo();
    res.status(200).json(atividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAtividadesDone = async (req, res) => {
  try {
    const atividades = await atividadesModel.getAtividadesDone();
    res.status(200).json(atividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAtividades = async (req, res) => {
  try {
    const {
      titulo,
      descricao,
      nivel_dificuldade,
      duracao,
      prazo,
      id_login,
      status,
    } = req.body;
    const newAtividades = await atividadesModel.createAtividades(
      titulo,
      descricao,
      nivel_dificuldade,
      duracao,
      prazo,
      id_login,
      status
    );
    res.status(201).json(newAtividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAtividades = async (req, res) => {
  try {
    const {
      titulo,
      descricao,
      nivel_dificuldade,
      duracao,
      prazo,
      id_login,
      status,
    } = req.body;
    const updatedAtividades = await atividadesModel.updateAtividade(
      req.params.id,
      titulo,
      descricao,
      nivel_dificuldade,
      duracao,
      prazo,
      id_login,
      status
    );
    if (updatedAtividades) {
      res.status(200).json(updatedAtividades);
    } else {
      res.status(404).json({ error: "Atividade não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAtividades = async (req, res) => {
  try {
    const deletedAtividades = await atividadesModel.deleteAtividades(
      req.params.id
    );
    if (deletedAtividades) {
      res.status(200).json(deletedAtividades);
    } else {
      res.status(404).json({ error: "Atividade não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAtividades,
  getAtividadesById,
  getAtividadesToDo,
  getAtividadesDone,
  createAtividades,
  updateAtividades,
  deleteAtividades,
};
