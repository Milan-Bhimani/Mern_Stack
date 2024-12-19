const fs = require('fs');
//async and also work as sync

//writing in a file in a sync way 

fs.writeFileSync('example.txt', 'Hello, this is an example text.', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

//writing a file in a async way

// fs.writeFile('example2.txt', 'I am Fucking Starboy', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// fs.appendFile('example.txt', "\nI'm Fucking Starboy", (err) => {
//     if (err) throw err;
//     console.log('The data was appended to file!');
// });

const fileContent = fs.readFileSync('example.txt', 'utf8');
console.log(fileContent);

const file = fs.readFile('example.txt', 'utf8', (err, result) =>{
    if(err) throw err;
    console.log(result);
});
// fs.unlinkSync("example.txt")

//fs.cpsSync('example.txt','milan.txt');

//fs.filestateSync('example.txt')
