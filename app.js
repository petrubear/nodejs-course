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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes a note',
    handler: function () {
        log(chalk.green('removing a note'))
    }
})

yargs.command({
    command: 'list',
    describe: 'list existing notes',
    handler: function () {
        log(chalk.green('listing notes'))
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
