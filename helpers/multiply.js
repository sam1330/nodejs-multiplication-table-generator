const fs = require('fs');
const colors = require("colors");

const crearArchivo = async (base = 5, listar, limit = 10) => {
    console.log('=================='.america);
    console.log('   Table of: '.blue, colors.green(base));
    console.log('=================='.america);

    let output, file = ''

    for (let i = 0; i < limit; i++) {
        output += `${ base } ${'X'.blue} ${i} ${'='.blue} ${ base * i }\n`;
        file += `${ base } X ${i} = ${ base * i }\n`;
    }
    if(listar) {
        console.log(output);
    }

    await fs.writeFileSync(`./files/table-${base}.txt`, file);

    return `table-${base}.txt`;
};

module.exports = {
    crearArchivo
}