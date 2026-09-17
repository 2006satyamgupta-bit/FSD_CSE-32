const fs = require('fs')

fs.writeFileSync('student.txt', 'B.Tech Node.js Lab');

const data = fs.readFileSync('student.txt', 'utf-8');
console.log(data);

// write
fs.writeFileSync('student.txt', 'Name: Rahul \n Subject: Full Stack Development')
console.log('File created successfully');

//  update
fs.appendFileSync('student.txt', '\nExperiment 2 completed.');

console.log("File updated")

console.log(data)




