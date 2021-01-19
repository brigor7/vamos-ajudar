const knex = require('knex');
const config = require('../../knexfile');

const api = knex(config.development);

module.exports = api;
