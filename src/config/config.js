// const Sequelize = require('sequelize');

// module.exports = new Sequelize( {
//     // host:'localhost',
//     // dialect:'mysql',
//     // dialect:'sqllite',

//     // port: 3306,
//     dialect: 'sqlite',
//     storage: './database.sqlite'
// });


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite', // You can change the filename and location as needed
});

module.exports = sequelize;


// module.exports = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'db.sqlite', // You can specify the path where you want to store the SQLite database file
// });


