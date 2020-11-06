const sequelize = require('./config')

//import your models here

const connect =  async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // sync your models here
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
module.exports = connect ;