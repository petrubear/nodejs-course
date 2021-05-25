const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const log = console.log

// customize yargs version
yargs.version('0.0.1')

// yargs commands
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list existing notes',
    handler () {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reads a note',
    handler: function () {
        log(chalk.green('reading a note'))
    }
})

yargs.parse()
