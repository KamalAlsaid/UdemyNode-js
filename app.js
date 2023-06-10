const validator = require('validator')
const chalk = require('chalk')
const getNotes = require("./notes");
const yargs = require('yargs');
// const msg = getNotes();
/*
console.log(msg)
console.log(validator.isEmail('kamalalsa3d@gmail.com'))
const message = 'success!'
console.log(chalk.inverse.green('%s'),message)
*/

/*to writing comment after write node app.js kamal
you just havva write this commond*/

// console.log(process.argv[2])
// -------------------------------
const commond = process.argv[2]

console.log(process.argv)

// if(commond === 'add'){
//     console.log('Adding note!')
// }
// else if(commond === 'remove'){
//     console.log('removing note!')
// }
//cusomize yargs version
yargs.version('1.1.0')
// create yargs command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})
//create a new command 
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing a note!')
    }
})
// add,remove ,read,list
yargs.command({
    command: 'list',
    describe: 'list your note',
    builder:{
        title:{
            body:{
                describe:'note title',
                demandOption: true,
                type:'string'
            }
        }
    },
    handler: function(argv){
        console.log('list out all note!')
        console.log('Title : '+argv.title)
        console.log('body: '+argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'note title',
            // if you wanna the title be require 
            demandOption: true,
            // what kind of type you wanna inserting from usre
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title:'+argv.title)
    }
})
console.log(yargs.argv)