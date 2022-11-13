const fs = require('fs/promises');
fs.appendFile('welcome.txt', console.log('Hello Node'));
fs.readFile('/C:/Program Files/nodejs/welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});