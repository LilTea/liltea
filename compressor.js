const {big2lil} = require("./converters.js");
const {getInput, print} = require("./helpers.js");

getInput(source => print(big2lil(source)));