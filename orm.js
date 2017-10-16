var Sequelize = require('sequelize');

var sequelize = new Sequelize({
  username: 'nethanelkohen',
  dialect: 'postgres',
  database: 'whoami',
  host: 'localhost'
});

var TestUser = sequelize.define('test_user', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
});

var orm = {

  initialize: function() {

    TestUser.sync()
      .then(function() {
        TestUser.create({
          firstname: 'Jackson',
          lastname: 'Pollock'
        });
        TestUser.create({
          firstname: 'Sylvia',
          lastname: 'Plath'
        });
        TestUser.create({
          firstname: 'Daenerys',
          lastname: 'Targaryen'
        });
      });
  },
  TestUser: TestUser,

  getAll: function(tableName, callback) {
    this.initialize();
    tableName.findAll().then(function(rows) {
      callback(rows);
    });
  },

  findById: function(id, tableName, callback) {
    this.initialize();
    tableName.findById(id).then(function(row) {
      callback(row);
    });
  }
};

module.exports = orm;
