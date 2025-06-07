// controllers/questionarioController.js

const questionarioModel = require('../models/questionarioModel');

const getAllQuestionario = async (req, res) => {
  try {
    const questionario = await questionarioModel.getAllQuestionario();
    res.status(200).json(questionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getQuestionarioById = async (req, res) => {
  try {
    const questionario = await questionarioModel.getQuestionarioById(req.params.id);
    if (questionario) {
      res.status(200).json(questionario);
    } else {
      res.status(404).json({ error: 'Questionário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createQuestionario = async (req, res) => {
  try {
    const { nome, data, id_usuario, id_perguntas } = req.body;
    const newQuestionario = await questionarioModel.createQuestionario(nome, data, id_usuario, id_perguntas);
    res.status(201).json(newQuestionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllQuestionario,
  getQuestionarioById,
  createQuestionario,
};