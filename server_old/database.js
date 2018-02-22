const DB = require('nosql');
const fs = require('fs');

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
