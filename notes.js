console.log('Starting note.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesAsString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesAsString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
    console.log('Getting all notes');
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    }  
    var duplicateNotes = notes.filter( (note) => note.title === title );

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getNote = (title) => {
    console.log('Getting note by title: ', title);
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var notesToSave = notes.filter( (note) => note.title !== title );
    saveNotes(notesToSave);

    return notes.length !== notesToSave.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};