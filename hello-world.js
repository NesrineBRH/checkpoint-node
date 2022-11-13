const fs = require('fs');

fs.appendFile('hello-world.js',
console.log('HELLO WORLD'),

function (err) {
    if (err) throw err;
    console.log('Fichier créé !');
    }
);

//run on console'node hello-world.js'
