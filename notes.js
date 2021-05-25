const fs = require('fs')
const chalk = require('chalk')
const notesFile = 'notes.json'
const log = console.log

const getNotes = function () {
    return 'your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        log(chalk.green('New note added'))
    } else {
        log(chalk.red('Note title already exists'))
    }
}

const saveNotes = function (notes) {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync(notesFile, notesJson)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync(notesFile)
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const removeNote = function (title) {
    log(chalk.blue('removing note with title ', title))
    const notes = loadNotes()
    const uniqueNotes = notes.filter(function (note) {
        return note.title !== title
    })

    if (uniqueNotes.length === notes.length) {
        log(chalk.red('No notes removed'))
    } else {
        log(chalk.green('Note removed: ', title))
    }

    saveNotes(uniqueNotes)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
