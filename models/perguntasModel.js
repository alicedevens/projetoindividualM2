const db = require('../config/db');

class Perguntas {
  static async getAllPerguntas() {
    const result = await db.query('SELECT * FROM login');
    return result.rows;
  }

  static async getPerguntasById(id) {
    const result = await db.query('SELECT * FROM login WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createPerguntas(data) {
    const result = await db.query(
      'INSERT INTO login (texto_perguntas) VALUES ($1) RETURNING *',
      [data.texto_perguntas]
    );
    return result.rows[0];
  }

}

module.exports = Perguntas;
