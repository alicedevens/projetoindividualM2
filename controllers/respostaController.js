// controllers/respostaController.js

const respostaModel = require('../models/respostaModel');

const getAllResposta = async (req, res) => {
  try {
    const resposta = await respostaModel.getAllResposta();
    res.status(200).json(resposta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRespostaById = async (req, res) => {
  try {
    const resposta = await respostaModel.getRespostaById(req.params.id);
    if (resposta) {
      res.status(200).json(resposta);
    } else {
      res.status(404).json({ error: 'Resposta não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createResposta = async (req, res) => {
  try {
    const { id_pergunta, avaliacao } = req.body;
    const newResposta = await respostaModel.createResposta(id_pergunta, avaliacao);
    res.status(201).json(newResposta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateResposta = async (req, res) => {
  try {
    const { id_pergunta, avaliacao } = req.body;
    const updatedResposta = await respostaModel.updateResposta(req.params.id, id_pergunta, avaliacao);
    if (updatedResposta) {
      res.status(200).json(updatedResposta);
    } else {
      res.status(404).json({ error: 'Resposta não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getAllResposta,
  getRespostaById,
  createResposta,
  updateResposta,
};
