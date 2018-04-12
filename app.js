console.log('Starting App');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

console.log(user);

//fs.appendFile('Grettings.txt', 'Hello ' + user.username + '!', function(err) {
//    if (err) {
//        console.log('Unable to write to file');
//    }
//});

fs.appendFile('Grettings.txt', `Hello ${user.username}!`, function(err) {
    if (err) {
        console.log('Unable to write to file');
    }
});