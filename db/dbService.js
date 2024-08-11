// db/dbService.js
const pool = require('./dbConfig');

const getPluvimetros = async () => {
  const res = await pool.query('SELECT * FROM pluvimetros');
  return res.rows;
};

module.exports = {
  getPluvimetros,
};
