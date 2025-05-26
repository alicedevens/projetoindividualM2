const db = require('../config/db');

class Atividades {
  static async getAllAtividades() {
    const result = await db.query('SELECT * FROM atividades');
    return result.rows;
  }

  static async getAtividadesById(id) {
    const result = await db.query('SELECT * FROM atividades WHERE id = $1', [id]);
    return result.rows[0];
  }
 
    static async getAtividadesToDo() {
    const result = await db.query('SELECT * FROM atividades WHERE status = FALSE');
    return result.rows[0];
  }
   static async getAtividadesDone() {
    const result = await db.query('SELECT * FROM atividades WHERE status = TRUE');
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO atividades (titulo, descricao, nivel_dificuldade, duracao, prazo, id_login, status) VALUES ($1, $2, $3, $4, $5 $6, $7) RETURNING *',
      [data.titulo, data.descricao, data.nivel_dificuldade, data.duracao, data.prazo, data.id_login, data.status]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE atividades SET titulo = $1, descricao = $2, nivel_dificuldade = $3, duracao = $4, prazo = $5, id_login = $6, status = $7, WHERE id = $8 RETURNING *',
      [data.titulo, data.descricao, data.nivel_dificuldade, data.duracao, data.prazo, data.id_login, data.status, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM atividades WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Atividades;
