const DB = require('nosql');
const fs = require('fs');

if (!fs.existsSync('./database')) {
  fs.mkdirSync('./database');
}

const nosql = DB.load('./database/database.nosql');

exports.loadSettings = () => {
  return nosql.meta('settings');
};

exports.saveSettings = settings => {
  return nosql.meta('settings', settings);
};

exports.saveToken = token => {
  return nosql.meta('token', token);
};

exports.getToken = () => {
  return nosql.meta('token');
};

exports.insert = document => {
  return new Promise((resolve, reject) => {
    nosql.insert(document).callback((err, count) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

exports.getIssues = () => {
  return new Promise((resolve, reject) => {
    nosql.find().callback((err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
};
