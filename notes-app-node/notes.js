const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        const dataJSON = JSON.parse(dataString);
        return dataJSON;
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
    });
    if(duplicateNote === undefined) {
        const note = {
            title: title,
            body: body
        }
        notes.push(note);
        saveNotes(notes);
        console.log(chalk.green.inverse(`New Note Added`));
    } else {
        console.log(chalk.red.inverse(`Duplicate Note`));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteIndex = notes.findIndex((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
    });
    if (noteIndex > -1){
        notes.splice(noteIndex, 1);
        saveNotes(notes);
        console.log(chalk.green.inverse(`Removed a Note`));
    } else {
        console.log(chalk.red.inverse(`Note Not Found!`));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse(`Your Notes...`));
    notes.forEach((item) => {
        console.log(item.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
    });
    if (note) {
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    } else {
        console.log(chalk.red.inverse(`Note Not Found`));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}