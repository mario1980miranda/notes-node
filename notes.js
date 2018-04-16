console.log('Starting note.js');

//console.log(module);

module.exports.age = 38;

module.exports.addNote = () => {

    console.log('add note');

    return 'New Note';
};

module.exports.add = (i, j) => {

    return (i + j);
};