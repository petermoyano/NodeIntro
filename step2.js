const { default: axios } = require('axios');
const fs = require('fs');
const process = require('process');
const argv = process.argv;


function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    })
}


async function webCat(URL) {
    try {
        let prom = await axios.get(URL);
        console.log(prom.data);
    } catch (err) {
        console.error(`Could not read ${URL}:, ${err});
        process.exit(1);
    }
    
}

if(argv[2] === "path"){
    cat(argv[3])
}
else{
    webCat(argv[3]);
};

