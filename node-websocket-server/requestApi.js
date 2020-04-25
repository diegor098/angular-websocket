const request = require('request');
 
//url api laravel
const url = 'http://127.0.0.1:8000/api/test';

const getData = (callback) => {
    request(url,(err, res) => {
    if (err) { 
        return callback(err);
     }
    return callback(res.body);
    });
}

module.exports.requestApi = getData;