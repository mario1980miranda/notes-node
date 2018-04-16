// var obj = {
//     name: 'Mario'
// };

// var stringobj = JSON.stringify(obj);

// console.log(typeof stringobj);
// console.log(stringobj);

// var personString = '{"name":"Mario", "age":37}';

// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);