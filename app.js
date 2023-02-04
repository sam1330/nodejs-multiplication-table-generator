const { crearArchivo } = require("./helpers/multiply");
const argv = require("./config/yargs");
require("colors");
console.clear();

const base = argv.b;

crearArchivo(base, argv.l, argv.limit)
  .then((name) => console.log(name, "Created"))
  .catch((err) => console.log(err));
