// controllers/perguntasController.js

const perguntasModel = require('../models/perguntasModel');

const getAllPerguntas = async (req, res) => {
  try {
    const perguntas = await perguntasModel.getAllPerguntas();
    res.status(200).json(perguntas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPerguntasById = async (req, res) => {
  try {
    const perguntas = await perguntasModel.getPerguntasById(req.params.id);
    if (perguntas) {
      res.status(200).json(perguntas);
    } else {
      res.status(404).json({ error: 'Perguntas não encontradas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPerguntas = async (req, res) => {
  try {
    const { texto_perguntas } = req.body;
    const newPerguntas = await perguntasModel.createPerguntas(texto_perguntas);
    res.status(201).json(newPerguntas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getAllPerguntas,
  getPerguntasById,
  createPerguntas,
};
