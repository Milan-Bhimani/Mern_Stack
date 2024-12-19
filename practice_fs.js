const fs = require('fs');

const readFile=fs.readFileSync("fs.json","utf-8");

const jsonData = JSON.parse(readFile);

let str1 =  {"name": "Sadap",
    "age":20
}
let str2 = {"name": "Bhumi",
    "age":22
}
let str3 = {"name":"Harsh",
    "age":24
}

const result = [jsonData[0], str1, str2,str3];

fs.writeFileSync("fs.json", JSON.stringify(result));
