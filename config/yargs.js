const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Multiplication table base'
  })
  .options("l", {
    alias: "listar",
    demandOption: false,
    describe: "Show table on console"
  })
  .options("limit", {
    demandOption: false,
    describe: "Describe limit"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  })
  .argv;

module.exports = argv;