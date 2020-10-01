const yargs = require('yargs');
const notes = require('./notes');

// Add Command
yargs.command({
    command: 'add',
    describe: 'It Adds a New Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'It Removes a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

// List Command
yargs.command({
    command: 'list',
    describe: 'It Lists all the Note',
    handler: () => {
        notes.listNotes();
    }
});

// Read Command
yargs.command({
    command: 'read',
    describe: 'It Reads a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
});

yargs.parse();

 