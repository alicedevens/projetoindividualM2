const db = require('../config/db');

class Login {
  static async getAllUsers() {
    const result = await db.query('SELECT * FROM login');
    return result.rows;
  }

  static async getUserById(id) {
    const result = await db.query('SELECT * FROM login WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createUser(data) {
    const result = await db.query(
      'INSERT INTO login (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [data.nome, data.email, data.senha]
    );
    return result.rows[0];
  }

  static async updateUser(id, data) {
    const result = await db.query(
      'UPDATE login SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *',
      [data.nome, data.email, data.senha, id]
    );
    return result.rows[0];
  }

  static async deleteUser(id) {
    const result = await db.query('DELETE FROM login WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Login;
