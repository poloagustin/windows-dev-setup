const {send} = require('micro');
const fs = require('fs');

module.exports = async function (req, res) {
  fs.readFile('./script.ps1', (err, data) => {
    if (err) {
      send(res, 500, 'Something went wrong!');
    }

    send(res, 200, data);
  });
}
