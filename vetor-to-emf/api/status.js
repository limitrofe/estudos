const { sendJson } = require('./_shared');
const { getConverterStatus } = require('../converter-availability');

module.exports = async function handler(req, res) {
  sendJson(res, 200, getConverterStatus());
};
