var chalk = require("chalk");

var message = "Hello " + chalk.red("World");
console.log(message);


var message = "Hello " + chalk.red.bold.underline('Hello', 'world')
console.log(message);