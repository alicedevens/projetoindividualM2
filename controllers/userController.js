// controllers/userController.js

const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByCredentials = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    // Busca usuário pelo nome, email e senha
    const result = await userModel.getUserByCredentials(nome, email, senha);
    if (result) {
      // Usuário autenticado, redireciona para o questionário
      res.redirect('/atividades');
    } else {
      // Usuário não encontrado, renderiza login com erro
      res.render('pages/login', { error: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.render('pages/login', { error: 'Erro ao autenticar' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const newUser = await userModel.createUser(nome, email, senha);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const updatedUser = await userModel.updateUser(req.params.id, nome, email, senha);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.deleteUser(req.params.id);
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByCredentials,
  createUser,
  updateUser,
  deleteUser
};
