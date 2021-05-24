const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk');
const log = console.log;

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('test@test.com'))
console.log(validator.isURL('http://test'))

log(chalk.red.bold('Error'))
log(chalk.green.bold('Success'))
