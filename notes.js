console.log("Starting notes.js");
const fs = require ('fs');

function fetchNotes () {
    try {
        return JSON.parse(fs.readFileSync('note.txt'))
    } catch (error) {
        return [];
    }
}
function addingNote(title,body){
    var notes = fetchNotes ()
    // try {
    //     notes.push(JSON.parse(fs.readFileSync('note.txt')))
    // } catch (err) {
    //      notes = [];

    // }
    var note = {
      title,
      body
    } ;
    var double = note.filter((note) => note.title === title)
    if (double.length === 0) {
        notes.push (note)
        fs.writeFileSync("note.txt",JSON.stringify(notes))
        logNote(note)  }
        else {
            console.log("STOP:Title already exixts")
        }
}
var removeNote = (title)=> {
    var notes = fetchNotes ()
    var filteredNotes = notes.filter((note) => note.title !== title)
    fs.writeFileSync("note.txt",JSON.stringify(filteredNotes))
}
var readNote = (title) => {
    var notes = fetchNotes ()
    var filteredNotes = notes.filter((note) => note.title === title)
    console.log(`Title: ${filteredNotes[0].title} Body: ${filteredNotes[0].body}`);  
    logNote(filteredNotes[0]) 
}
var getAll =() =>{
   var notes = fetchNotes()
   notes.forEach((note) => logNote (note)
   );
}
var logNote = (note) =>{
    console.log("*********************************")
    console.log(`Title: ${note.title} `)
    console.log(`Body: ${note.body} `)
}
module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll,
}