const db = require('../config/db');

class Questionarios {
  static async getAllQuestionario() {
    const result = await db.query('SELECT * FROM questionario');
    return result.rows;
  }

  static async getQuestionarioById(id) {
    const result = await db.query('SELECT * FROM questionario WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createQuestionario(data) {
    const result = await db.query(
      'INSERT INTO questionario (nome, data, id_usuario, id_perguntas) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.data, data.id_usuario, data.id_perguntas]
    );
    return result.rows[0];
  }
}

module.exports = Questionarios;
