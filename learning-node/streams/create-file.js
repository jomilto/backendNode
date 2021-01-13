const fs = require('fs');

const file = fs.createWriteStream('./file');

for(let i=0; i <= 1e6; i++){
    file.write('Lorem ipsum')
}

file.end();