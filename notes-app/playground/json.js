const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parsedData = JSON.parse(bookJson);
console.log(parsedData.title);

const fileName = '1-json.json';
fs.writeFileSync(fileName, bookJson);
const dataBuffer = fs.readFileSync(fileName);
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.author);

const challengeFile = 'data.json';
const challengeBuffer = fs.readFileSync(challengeFile);
const challengeJson = challengeBuffer.toString();
const challengeData = JSON.parse(challengeJson);
challengeData.name = 'Edison';
challengeData.age = 39;
modifiedJson = JSON.stringify(challengeData);
fs.writeFileSync(challengeFile, modifiedJson);
