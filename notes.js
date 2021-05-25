const fs = require('fs')
const chalk = require('chalk')
const notesFile = 'notes.json'
const log = console.log

const getNotes = () => {
    return 'your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
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

const saveNotes = (notes) => {
    log(chalk.blue('Saving Notes'))
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync(notesFile, notesJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notesFile)
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    log(chalk.blue('removing note with title ', title))
    const notes = loadNotes()
    const uniqueNotes = notes.filter((note) => note.title !== title)
    if (uniqueNotes.length === notes.length) {
        log(chalk.red('No notes removed'))
    } else {
        log(chalk.green('Note removed: ', title))
    }
    saveNotes(uniqueNotes)
}

const listNotes = () => {
    log(chalk.blue('Listing Notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        log(' - ' + note.title)
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
