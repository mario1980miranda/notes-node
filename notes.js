console.log('Starting note.js');

const fs = require('fs');

var getAll = () => {

    console.log('Getting all notes');
};

var addNote = (title, body) => {

    var notes = [];
    var note = {
        title: title,
        body: body
    }

    try {

        var notesAsString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesAsString);
        
    } catch (e) {
        // nothing to do for now
    }
    
    var duplicateNotes = notes.filter( (note) => note.title === title );

    if (duplicateNotes.length === 0) {

        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
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