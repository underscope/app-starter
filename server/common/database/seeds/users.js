'use strict';

const { auth: config = {} } = require('../../../config');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');
const { role } = require('../../../../common/config');

const now = new Date();
const users = [{
  first_name: 'Admin',
  last_name: 'Example',
  email: 'admin@example.org',
  password: 'admin123',
  role: role.ADMIN,
  created_at: now,
  updated_at: now
}, {
  first_name: 'User',
  last_name: 'Example',
  email: 'user@example.org',
  password: 'user123',
  role: role.USER,
  created_at: now,
  updated_at: now
}];

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.map(users, user => encryptPassword(user))
      .then(users => queryInterface.bulkInsert('user', users, {}));
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};

function encryptPassword(user) {
  return bcrypt.hash(user.password, config.saltRounds)
    .then(password => (user.password = password))
    .then(() => user);
}
