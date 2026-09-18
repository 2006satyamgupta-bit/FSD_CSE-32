const fs = require('fs');

// Create / Writ
fs.writeFileSync(
    'student.txt',
    'Name: Satyam Kumar\n' +
    'Roll Number: 1021\n' +
    'Branch: CSE\n' +
    'Semester: 3\n'
);

console.log('File created successfully');

// Read
let data = fs.readFileSync('student.txt', 'utf8');

console.log('\nStudent Details:');
console.log(data);

// Update
fs.appendFileSync(
    'student.txt',
    'Subject: Full Stack Development\n' +
    'Marks: 85\n' +
    'Attendance: 92%\n'
);

console.log('File updated successfully');

// Read Again
data = fs.readFileSync('student.txt', 'utf8');

console.log('\nUpdated Student Details:');
console.log(data);