const fs = require('fs');
const targetPath = './dist/vendas360/env.js';

const envConfigFile = `(function (window) {
  window.__env__ = window.__env__ || {};
  window.__env__.API_BASE_URL = "${process.env.API_BASE_URL || 'http://localhost:8080'}";
}(this));`;

fs.writeFileSync(targetPath, envConfigFile);
console.log('env.js criado com sucesso!');
