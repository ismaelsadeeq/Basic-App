const {Sequelize} = require('sequelize');

var sequelize = new Sequelize('database', 'root', '', {
  host: 'localhost',
  dialect:  'mysql' 
});

module.exports = sequelize;
