const fs = require('fs');
const csv = require('csv-parser');
const results = [];

fs.createReadStream('profiles.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });