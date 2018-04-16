console.log('Starting note.js');


var getAll = () => {

    console.log('Getting all notes');
};

var addNote = (title, body) => {

    console.log('Adding note', title, body);
};

var getNote = (title) => {

    console.log('Getting note by title: ', title);
}

var removeNote = (title) => {

    console.log('Removing note by title: ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};