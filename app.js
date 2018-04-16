console.log('Starting App');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

var res = notes.addNote();

console.log(res);

var sum = notes.add(5,2);

console.log(sum);

//console.log(user);

//fs.appendFile('Grettings.txt', 'Hello ' + user.username + '!', function(err) {
//    if (err) {
//        console.log('Unable to write to file');
//    }
//});

// fs.appendFile('Grettings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });