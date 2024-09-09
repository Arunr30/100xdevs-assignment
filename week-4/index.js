const fs = require('fs')
const { Command } = require('commander')
const program = new Command()

program
.name('count')
.description('cli based word counter')
.version("^12.1.0")

program.command('counter')
.description('cli app')
.argument('<file>', 'word to count')
.action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log(err)
        } else {
            const len = data.length;
            console.log(`this file len is ${len}`)
        }
    })
})

program.parse(process.argv)

