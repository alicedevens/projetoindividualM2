const db = require('../config/db');

class Resposta {
  static async getAllResposta() {
    const result = await db.query('SELECT * FROM resposta');
    return result.rows;
  }

  static async getRespostaById(id) {
    const result = await db.query('SELECT * FROM resposta WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createResposta(data) {
    const result = await db.query(
      'INSERT INTO resposta (id_pergunta, avaliacao) VALUES ($1, $2) RETURNING *',
      [data.id_pergunta, data.avaliacao]
    );
    return result.rows[0];
  }

  static async updateResposta(id, data) {
    const result = await db.query(
      'UPDATE resposta SET id_pergunta = $1, avaliacao = $2 WHERE id = $4 RETURNING *',
      [data.id_pergunta, data.avaliacao, id]
    );
    return result.rows[0];
  }


}

module.exports = Resposta;
