const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'qwer123', {
  host: 'localhost',
  dialect: 'postgres'
});